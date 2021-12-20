import React, { useState, useEffect } from 'react';
import { FlatList, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { fetchPhotos, setPage, setSelectedImage } from '../../redux/actions/photos';
import { RootState } from '../../redux/reducers';
import { HeaderBackground } from '../HeaderBackground/HeaderBackground';
import { Spinner } from '../Spinner/Spinner';
import { Picture } from '../Common/Picture';
import { SelectedImageType } from '../../types/photos';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import styles from '../Common/styles';

export const Pictures = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const photos = useSelector(({ photos }: RootState) => photos.photos);
  const page = useSelector(({ photos }: RootState) => photos.page);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchPhotos(page));
    setLoading(false);
  }, [page]);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  const Loader = () => {
    return !loading ? <Spinner /> : null;
  };

  const onOpenPicture = (photoObj: SelectedImageType) => () => {
    navigation.navigate('Detailed');
    dispatch(setSelectedImage(photoObj));
  };

  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => {
        return (
          <Picture>
            <TouchableOpacity activeOpacity={0.9} onPress={onOpenPicture(item)}>
              <ImageBackground source={{ uri: item.urls.regular }} style={styles.image}>
                <Text style={styles.author}>{item.user.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </Picture>
        );
      }}
      keyExtractor={(item) => item.id}
      ListHeaderComponent={HeaderBackground}
      ListFooterComponent={Loader}
      showsVerticalScrollIndicator={false}
      onEndReached={loadMore}
      onEndReachedThreshold={0}
    />
  );
};
