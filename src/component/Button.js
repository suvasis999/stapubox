import React from 'react';
import { Text, Pressable } from 'react-native';

export default function Button({
  title,
  onPress,
  disabled = false,
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={`h-14 rounded-xl justify-center items-center mt-6
        ${disabled ? 'bg-disablebtn' : 'bg-btnbg'}`}
    >
      <Text
        className={`text-base font-semibold
          ${disabled ? 'text-disabltext' : 'text-primarytext'}`}
      >
        {title}
      </Text>
    </Pressable>
  );
}
