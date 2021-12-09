import React, { useState, useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPhotos, setPage } from '../../redux/actions/photos';
import { RootState } from '../../redux/reducers';
import { HeaderBackground } from '../HeaderBackground/HeaderBackground';
import { Picture } from './Picture/Picture';

export const Pictures = () => {
  const dispatch = useDispatch();
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
    return !loading ? (
      <View>
        <ActivityIndicator size="small" color="black" />
      </View>
    ) : null;
  };

  return (
    <FlatList
      data={photos}
      renderItem={({ item }) => {
        return <Picture photos={item} />;
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
