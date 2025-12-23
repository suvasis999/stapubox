import React from 'react';
import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

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

export default function Header({
  title = 'Title',
  titleColor = 'primarytext',
  weight = 'SemiBold',
  size,                
  showBack = true,
  showLogout = true,
  onLogout,
  style = '',
}) {
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

 
  const defaultSize =
    width < 360 ? 16 :
    width < 400 ? 18 :
    width < 768 ? 20 :
    22;

  const fontSize = size || defaultSize; 

  return (
    <View className={`flex-row items-center justify-between px-4 py-3 ${style}`}>

      
      <View className="w-10">
        {showBack && (
          <TouchableOpacity onPress={() => navigation.goBack()} className='bg-disablebtn w-10 h-10 items-center justify-center rounded-full'>
            <SimpleLineIcons name="arrow-left" size={16} color="#ffffff" />
          </TouchableOpacity>
        )}
      </View>

     
      <Text
        style={{ fontSize }}
        className={`${FONT_MAP[weight]} ${COLOR_MAP[titleColor]}`}
      >
        {title}
      </Text>

      
      <View className="w-10 items-end">
        {showLogout && (
          <TouchableOpacity onPress={onLogout}>
            <Ionicons name="log-out-outline" size={24} color="#ffffff" />
          </TouchableOpacity>
        )}
      </View>

    </View>
  );
}
