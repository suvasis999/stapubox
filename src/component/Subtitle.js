import React from 'react';
import { Text, useWindowDimensions,TouchableOpacity } from 'react-native';

const COLOR_MAP = {
  primarytext: 'text-primarytext',
  link: 'text-link',
  errortext: 'text-errortext',
  stroke: 'text-stroke',
};

const FONT_MAP = {
  Bold: 'font-jakartaBold',
  SemiBold: 'font-jakartaSemi',
  Regular: 'font-jakartaRegular',
  Light: 'font-jakartaLight',
};

export default function Subtitle({
  name,
  color = 'primarytext',
  style = '',
  weight = 'Regular',
  size='',
  onPress,
}) {
  const { width } = useWindowDimensions();

  const defaultSize =
    width < 360 ? 14 :
    width < 400 ? 16 :
    width < 768 ? 18 :
    20;

  const fontSize = size || defaultSize;

 const content = (
    <Text
      style={{ fontSize }}
      className={`${FONT_MAP[weight]} ${COLOR_MAP[color]} ${style}`}
    >
      {name}
    </Text>
  );

 
  if (onPress) {
    return (
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        {content}
      </TouchableOpacity>
    );
  }

  return content;
}
