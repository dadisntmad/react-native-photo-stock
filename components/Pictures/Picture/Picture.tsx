import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { PhotosType } from '../../../types/photos';

import styles from './styles';

type PictureProps = {
  photos: PhotosType;
};

export const Picture = ({ photos }: PictureProps) => {
  return (
    <View>
      <ImageBackground source={{ uri: photos.urls.regular }} style={styles.image}>
        <Text style={styles.author}>{photos.user.name}</Text>
      </ImageBackground>
    </View>
  );
};
