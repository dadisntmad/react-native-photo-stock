import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { PhotosType } from '../../../types/photos';
import { setSelectedImage } from '../../../redux/actions/photos';

import styles from './styles';

type PictureProps = {
  photos: PhotosType;
};

export const Picture = ({ photos }: PictureProps) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onOpenPicture = () => {
    navigation.navigate('Detailed');
    dispatch(setSelectedImage(photos));
  };

  return (
    <View>
      <TouchableOpacity activeOpacity={0.9} onPress={onOpenPicture}>
        <ImageBackground source={{ uri: photos.urls.regular }} style={styles.image}>
          <Text style={styles.author}>{photos.user.name}</Text>
        </ImageBackground>
      </TouchableOpacity>
    </View>
  );
};
