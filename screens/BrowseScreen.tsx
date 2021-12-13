import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Discover } from '../components/Discover/Discover';
import { SearchBar } from '../components/SearchBar/SearchBar';

import { View } from '../components/Themed';

export function BrowseScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <SearchBar />
        <Discover />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
