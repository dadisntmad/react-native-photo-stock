import React, { useState, useEffect } from 'react';
import { FlatList, ImageBackground, TouchableOpacity, Text } from 'react-native';
import instance from '../API/api';
import { Spinner } from '../components/Spinner/Spinner';
import { setPage, setSelectedImage } from '../redux/actions/categories';
import { RootState } from '../redux/reducers';
import { DiscoverType } from '../types/categories';
import { PictureGrid } from '../components/Common/PictureGrid';
import { SelectedImageType } from '../types/photos';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import styles from '../components/Common/styles';

export const SearchResultScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const page = useSelector(({ categories }: RootState) => categories.page);
  const searchValue = useSelector(({ categories }: RootState) => categories.searchValue);
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState<DiscoverType[]>([]);

  const fetchSearchResults = async () => {
    try {
      const response = await instance.get(`/search/photos?query=${searchValue}`);
      if (page === 1) {
        setPic(response.data.results);
      } else {
        setPic((prev) => [...prev, ...response.data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchSearchResults();
    setLoading(false);
  }, [searchValue, page]);

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
      data={pic}
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
      showsVerticalScrollIndicator={false}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0}
      ListFooterComponent={Loader}
    />
  );
};
