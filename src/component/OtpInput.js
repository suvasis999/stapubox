import React, { useRef } from 'react';
import { View, TextInput } from 'react-native';

export default function OtpInput({
  otp,
  setOtp,
  length = 4,
}) {
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  const handleBackspace = (text, index) => {
    if (!text && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <View className="flex-row mb-10">
      {otp.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          value={digit}
          onChangeText={(text) => handleChange(text, index)}
          onKeyPress={({ nativeEvent }) =>
            nativeEvent.key === 'Backspace' &&
            handleBackspace(digit, index)
          }
          keyboardType="numeric"
          maxLength={1}
          className={`w-12 h-12 rounded-md text-center text-lg font-jakartaRegular mx-2
            ${
              digit
                ? ' text-white border-2 border-gray-300 '
                : 'border-2 border-borderdisable text-gray-900'
            }`}
        />
      ))}
    </View>
  );
}
