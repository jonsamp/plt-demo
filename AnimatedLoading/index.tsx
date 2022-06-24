import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, Animated, Easing } from 'react-native';
import { Background } from './Background';
import { Progress } from './Progress';

type Props = {
  size?: number;
};

export function AnimatedLoading(props: Props) {
  const { size = 200 } = props;
  const rotateValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const RotateData = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <Background size={size} />
      <Animated.View
        style={{
          ...styles.progressContainer,
          ...{
            transform: [{ rotate: RotateData }],
          },
        }}
      >
        <Progress size={size} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    position: 'absolute',
  },
});
