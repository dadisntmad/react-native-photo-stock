import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { Categories } from '../Categories/Categories';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDiscoverPhotos, setPage } from '../../redux/actions/categories';
import { RootState } from '../../redux/reducers';
import { DiscoverSingle } from './DiscoverSingle/DiscoverSingle';
import { Spinner } from '../Spinner/Spinner';

export const Discover = () => {
  const dispatch = useDispatch();
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

  return (
    <FlatList
      data={discoverPhotos}
      renderItem={({ item }) => {
        return <DiscoverSingle photos={item} />;
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
