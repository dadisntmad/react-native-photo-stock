import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Pictures } from '../components/Pictures/Pictures';

import { View } from '../components/Themed';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <Pictures />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
