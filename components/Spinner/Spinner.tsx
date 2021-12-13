import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export const Spinner = () => {
  return (
    <View>
      <ActivityIndicator size="small" color="black" />
    </View>
  );
};
