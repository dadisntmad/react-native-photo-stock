import React from 'react';
import { View } from 'react-native';

import styles from './styles';

type PictureGridProps = {
  children: React.ReactNode;
};

export const PictureGrid = ({ children }: PictureGridProps) => {
  return <View style={styles.container}>{children}</View>;
};
