import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { DiscoverType } from '../../../types/categories';
import { setSelectedImage } from '../../../redux/actions/categories';

import styles from './styles';

type CategoryPictureProps = {
  photos: DiscoverType;
};

export const CategoryPicture = ({ photos }: CategoryPictureProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onOpenPicture = () => {
    navigation.navigate('BrowseDetailed');
    dispatch(setSelectedImage(photos));
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.9} onPress={onOpenPicture}>
        <ImageBackground source={{ uri: photos.urls.regular }} style={styles.image}>
          <Text style={styles.author}>{photos.user.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
