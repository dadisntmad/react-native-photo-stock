import * as React from 'react';
import { StyleSheet } from 'react-native';
import { HeaderBackground } from '../components/HeaderBackground/HeaderBackground';

import { View } from '../components/Themed';

export function HomeScreen() {
  return (
    <View style={styles.container}>
      <HeaderBackground />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
