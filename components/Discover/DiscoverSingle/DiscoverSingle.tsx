import React from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { DiscoverType } from '../../../types/categories';

import styles from './styles';

type DiscoverSingleProps = {
  photos: DiscoverType;
};

export const DiscoverSingle = ({ photos }: DiscoverSingleProps) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={{ uri: photos.urls.regular }} style={styles.image}>
        <Text style={styles.author}>{photos.user.name}</Text>
      </ImageBackground>
    </View>
  );
};
