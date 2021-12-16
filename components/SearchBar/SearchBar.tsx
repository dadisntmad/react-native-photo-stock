import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { View, TextInput } from 'react-native';
import { RootState } from '../../redux/reducers';
import { useDispatch, useSelector } from 'react-redux';

import { EvilIcons } from '@expo/vector-icons';

import styles from './styles';
import { setSearchValue } from '../../redux/actions/categories';

export const SearchBar = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const searchValue = useSelector(({ categories }: RootState) => categories.searchValue);

  const onOpenModal = () => {
    navigation.navigate('SearchResult');
  };

  return (
    <View style={styles.container}>
      <EvilIcons style={styles.icon} name="search" size={22} color="#9c9c9c" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search"
        clearButtonMode="always"
        returnKeyType="search"
        value={searchValue}
        onChangeText={(text) => dispatch(setSearchValue(text))}
        onSubmitEditing={onOpenModal}
      />
    </View>
  );
};
