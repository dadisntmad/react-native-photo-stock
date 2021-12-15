import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { DiscoverType } from '../../../types/categories';
import styles from './styles';

type CategoryPictureProps = {
  photos: DiscoverType;
};

export const CategoryPicture = ({ photos }: CategoryPictureProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: photos.urls.regular }} style={styles.image}>
        <Text style={styles.author}>{photos.user.name}</Text>
      </ImageBackground>
    </View>
  );
};
