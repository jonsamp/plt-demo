import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

type Props = {
  size?: number;
};

export function Progress(props: Props) {
  const { size } = props;
  return (
    <Svg width={size} height={size} viewBox='0 0 370 371' fill='none'>
      <Path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M185.395 0C83.303 0 .54 82.763.54 184.855h9.513c0-96.839 78.503-175.342 175.342-175.342V0Z'
        fill='#605E60'
      />
    </Svg>
  );
}
