import React, { useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRandomPhoto } from '../../redux/actions/photos';
import { RootState } from '../../redux/reducers';

import styles from './styles';

export const HeaderBackground = () => {
  const dispatch = useDispatch();
  const randomPhoto = useSelector(({ photos }: RootState) => photos.randomPhotos);

  useEffect(() => {
    dispatch(fetchRandomPhoto());
  }, []);

  return (
    <View style={styles.imageContainer}>
      {randomPhoto.map((item) => (
        <ImageBackground key={item.id} source={{ uri: item.urls.regular }} style={styles.image}>
          <View style={styles.overlay}>
            <Text style={styles.title}>Photos for everyone</Text>
            <Text style={styles.subtitle}>Photo by {item.user.username}</Text>
          </View>
        </ImageBackground>
      ))}
    </View>
  );
};
