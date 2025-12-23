import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Input({
  value,
  onChangeText,
  placeholder,
  showCountryCode = false,
  multiline = false,
  numberOfLines = 4,
  keyboardType,
}) {
  const [open, setOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('+91');
  const [countries, setCountries] = useState([
    { label: '+91', value: '+91' },
    { label: '+1', value: '+1' },
  ]);

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-start', gap: 8 }}>
        
       
        {showCountryCode && (
          <DropDownPicker
            open={open}
            value={selectedCountry}
            items={countries}
            setOpen={setOpen}
            setValue={setSelectedCountry}
            setItems={setCountries}
            containerStyle={{ width: 80 }}
            style={{
              backgroundColor: '#2F2F2F',
              borderColor: '#FFFFFF33',
              borderRadius: 10,
              minHeight: multiline ? 48 * numberOfLines : 48,
            }}
            textStyle={{ color: 'white' }}
            dropDownContainerStyle={{
              backgroundColor: '#2F2F2F',
              borderColor: '#FFFFFF33',
            }}
          />
        )}

      
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor="#8A8A8A"
          keyboardType={keyboardType || 'default'}
          multiline={multiline}
          numberOfLines={multiline ? numberOfLines : 1}
          textAlignVertical={multiline ? 'top' : 'center'}
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#FFFFFF33',
            borderRadius: 10,
            paddingHorizontal: 12,
            paddingVertical: 12,
            color: 'white',
            backgroundColor: '#2F2F2F',
            height: multiline ? 48 * numberOfLines : 48,
          }}
        />
      </View>
    </View>
  );
}
