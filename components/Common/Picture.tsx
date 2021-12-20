import React from 'react';
import { View } from 'react-native';

type PictureProps = {
  children: React.ReactNode;
};

export const Picture = ({ children }: PictureProps) => {
  return <View>{children}</View>;
};
