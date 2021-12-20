import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';

import { RootState } from '../redux/reducers';

import moment from 'moment';
import { useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';

export const DetailedPictureScreen = () => {
  const selected = useSelector(({ photos }: RootState) => photos.selectedImage);
  return (
    <View>
      <View style={styles.author}>
        <Image
          source={{ uri: selected.user?.profile_image?.medium }}
          style={styles.authorProfilePicture}
        />
        <Text style={styles.authorName}>{selected.user?.name}</Text>
      </View>
      <Image source={{ uri: selected.urls?.regular }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View style={styles.likes}>
          <AntDesign style={styles.icon} name="hearto" size={17} color="black" />
          <Text>{selected.likes}</Text>
        </View>
        <View style={styles.published}>
          <AntDesign style={styles.icon} name="calendar" size={17} color="black" />
          <Text>Published on {moment(selected.created_at).format('MMMM Do, YYYY')}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  author: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  authorProfilePicture: {
    width: 35,
    height: 35,
    marginRight: 10,
    borderRadius: 17.5,
  },
  authorName: {
    fontSize: 14,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height / 1.5,
  },
  infoContainer: {
    padding: 14,
  },
  likes: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  icon: {
    marginRight: 4,
  },
  published: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
