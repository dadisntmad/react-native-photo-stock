import React from 'react';
import { View, TextInput } from 'react-native';

import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';

export const SearchBar = () => {
  return (
    <View style={styles.container}>
      <EvilIcons style={styles.icon} name="search" size={22} color="#9c9c9c" />
      <TextInput style={styles.searchInput} placeholder="Search" />
    </View>
  );
};
