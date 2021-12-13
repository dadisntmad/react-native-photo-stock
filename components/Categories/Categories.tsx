import React from 'react';
import { View, Text, ScrollView, ImageBackground } from 'react-native';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/reducers';

import styles from './styles';

export const Categories = () => {
  const categories = useSelector(({ categories }: RootState) => categories.categories);

  return (
    <View>
      <Text style={styles.title}>Browse by Category</Text>
      <ScrollView style={styles.viewContainer} horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category) => (
          <View key={category.id}>
            <ImageBackground style={styles.image} source={{ uri: category.categoryImage }}>
              <View style={styles.overlay}>
                <Text style={styles.categoryName}>{category.categoryName}</Text>
              </View>
            </ImageBackground>
          </View>
        ))}
      </ScrollView>
      <Text style={styles.title}>Discover</Text>
    </View>
  );
};
