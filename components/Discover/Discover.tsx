import React, { useEffect, useState } from 'react';
import { FlatList, ImageBackground, TouchableOpacity, Text } from 'react-native';
import { Categories } from '../Categories/Categories';
import { fetchDiscoverPhotos, setPage, setSelectedImage } from '../../redux/actions/categories';
import { RootState } from '../../redux/reducers';
import { Spinner } from '../Spinner/Spinner';
import { PictureGrid } from '../Common/PictureGrid';
import { SelectedImageType } from '../../types/photos';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import styles from '../Common/styles';

export const Discover = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const discoverPhotos = useSelector(({ categories }: RootState) => categories.discoverPhotos);
  const page = useSelector(({ categories }: RootState) => categories.page);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    dispatch(fetchDiscoverPhotos());
    setLoading(false);
  }, [page]);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  const Loader = () => {
    return !loading ? <Spinner /> : null;
  };

  const onOpenPicture = (photoObj: SelectedImageType) => () => {
    navigation.navigate('BrowseDetailed');
    dispatch(setSelectedImage(photoObj));
  };

  return (
    <FlatList
      data={discoverPhotos}
      renderItem={({ item }) => {
        return (
          <PictureGrid>
            <TouchableOpacity activeOpacity={0.9} onPress={onOpenPicture(item)}>
              <ImageBackground source={{ uri: item.urls.regular }} style={styles.imageGrid}>
                <Text style={styles.authorGrid}>{item.user.name}</Text>
              </ImageBackground>
            </TouchableOpacity>
          </PictureGrid>
        );
      }}
      keyExtractor={(item) => item.id}
      onEndReached={loadMore}
      onEndReachedThreshold={0}
      ListHeaderComponent={Categories}
      ListFooterComponent={Loader}
      showsVerticalScrollIndicator={false}
      horizontal={false}
      numColumns={2}
    />
  );
};
