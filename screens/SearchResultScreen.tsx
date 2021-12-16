import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import instance from '../API/api';
import { SearchPicture } from '../components/SearchBar/SearchPicture/SearchPicture';
import { Spinner } from '../components/Spinner/Spinner';
import { setPage } from '../redux/actions/categories';
import { RootState } from '../redux/reducers';
import { DiscoverType } from '../types/categories';

export const SearchResultScreen = () => {
  const dispatch = useDispatch();
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

  return (
    <FlatList
      data={pic}
      renderItem={({ item }) => {
        return <SearchPicture photos={item} />;
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
