import React from 'react';
import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import { RootState } from '../../redux/reducers';
import { setCategory } from '../../redux/actions/categories';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/core';

import styles from './styles';

export const Categories = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const categories = useSelector(({ categories }: RootState) => categories.categories);

  const onFoundByCategory = (category: string) => () => {
    navigation.navigate('FoundByCategory');
    dispatch(setCategory(category));
  };

  return (
    <View>
      <Text style={styles.title}>Browse by Category</Text>
      <ScrollView style={styles.viewContainer} horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <View key={category.id}>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={onFoundByCategory(category.categoryName)}>
              <ImageBackground style={styles.image} source={{ uri: category.categoryImage }}>
                <View style={styles.overlay}>
                  <Text style={styles.categoryName}>{category.categoryName}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.title}>Discover</Text>
    </View>
  );
};
