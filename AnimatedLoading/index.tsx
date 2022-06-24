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

  const rotate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <Background size={size} />
      <View style={styles.progressContainer}>
        <Animated.View
          style={{
            transform: [{ rotate }],
          }}
        >
          <Progress size={size} />
        </Animated.View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    position: 'absolute',
    transform: [{ rotate: '-100deg' }],
  },
});
