import React from 'react';
import { Image } from 'react-native';

export function Loading() {
  return (
    <Image
      source={require('./assets/images/loading.gif')}
      style={{ height: 200, width: 200 }}
    />
  );
}
