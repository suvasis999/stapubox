import React, { memo } from 'react';
import { Text, View } from 'react-native';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

const Wrapper = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView edges={['top', 'bottom']} className="flex-1 bg-primary">
      <View
        className="flex-1"
        style={{
       //  paddingTop: insets.top,
          paddingBottom: insets.bottom,
        }}
      >
        {children}
      </View>
    </SafeAreaView>
  );
};

export default memo(Wrapper);
