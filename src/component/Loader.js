import React from 'react';
import { View, ActivityIndicator } from 'react-native';

export default function Loader({
  visible = false,
  fullscreen = false,
  size = 'large',
  color = '#FFFFFF',
}) {
  if (!visible) return null;

  if (fullscreen) {
    return (
      <View className="absolute inset-0 z-50 justify-center items-center bg-black/50">
        <ActivityIndicator size={size} color={color} />
      </View>
    );
  }

  return (
    <View className="justify-center items-center">
      <ActivityIndicator size={size} color={color} />
    </View>
  );
}
