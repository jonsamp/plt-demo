import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
};

export function Background(props: Props) {
  const { size } = props;
  return (
    <Svg width={size} height={size} viewBox='0 0 370 371' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M185.373 369.855c102.093 0 184.855-82.762 184.855-184.855C370.228 82.907 287.466.145 185.373.145 83.28.145.518 82.907.518 185c0 102.093 82.762 184.855 184.855 184.855Zm0-9.512c96.839 0 175.343-78.504 175.343-175.343 0-96.84-78.504-175.343-175.343-175.343C88.533 9.657 10.03 88.161 10.03 185c0 96.839 78.504 175.343 175.343 175.343Z'
        fill='#A8A6A8'
      />
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='m277.459 142.365-1.263 13.453h16.614v63.806h14.389v-63.806h16.457l-1.221-13.453h-44.976Zm-203.5 77.259H59.134l.41-77.259h25.72s22.35 0 22.35 22.99-22.35 23.747-22.35 23.747H73.958v30.522Zm102.106 0v-77.259h14.834v63.503h25.367l-2.374 13.756h-37.827Zm-102.72-66.132v23.982h9.464c3.304-.107 10.296-2.597 10.296-11.703 0-9.107-6.992-11.98-10.296-12.279h-9.464Z'
        fill='#000'
      />
    </Svg>
  );
}
