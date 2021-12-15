import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../API/api';
import { CategoryPicture } from '../components/Categories/CategoryPicture/CategoryPicture';
import { Spinner } from '../components/Spinner/Spinner';
import { setPage } from '../redux/actions/categories';
import { RootState } from '../redux/reducers';
import { DiscoverType } from '../types/categories';

export const FoundByCategoryScreen = () => {
  const dispatch = useDispatch();
  const categoryTitle = useSelector(({ categories }: RootState) => categories.categoryTitle);
  const page = useSelector(({ categories }: RootState) => categories.page);
  const [loading, setLoading] = useState(false);
  const [pic, setPic] = useState<DiscoverType[]>([]);

  const fetchPhotosByCategory = async () => {
    try {
      const response = await instance.get(`/search/photos?query=${categoryTitle}`);
      if (page === 1) {
        setPic(response.data.results);
      } else {
        setPic((pictures) => [...pictures, ...response.data.results]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPhotosByCategory();
    setLoading(false);
  }, [categoryTitle, page]);

  const loadMore = () => {
    dispatch(setPage(page + 1));
  };

  const Loader = () => {
    return !loading ? <Spinner /> : null;
  };

  return (
    <FlatList
      data={pic}
      renderItem={({ item }) => {
        return <CategoryPicture photos={item} />;
      }}
      showsVerticalScrollIndicator={false}
      keyExtractor={(item) => item.id}
      numColumns={2}
      onEndReached={loadMore}
      onEndReachedThreshold={0}
      ListFooterComponent={Loader}
    />
  );
};
