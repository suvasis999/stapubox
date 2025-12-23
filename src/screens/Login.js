import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Wrapper from '../component/Wrapper';
import Subtitle from '../component/Subtitle';
import Input from '../component/Input';
import Button from '../component/Button';
import Loader from '../component/Loader';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { sendOtpApi, getPlayerDataApi } from '../config/service';
import { setMobile } from '../redux/slices/authSlice';

export default function Login({ navigation }) {
  const dispatch = useDispatch();
  const [mobile, setMobileNo] = useState('');
  const [loading, setLoading] = useState(false);
  const isValid = mobile.length === 10;

 
  useEffect(() => {
    const checkExistingUser = async () => {
      setLoading(true);
      try {
        const token = await AsyncStorage.getItem('jwt_token');
        console.log('token:', token);
        if (token) {
          const res = await getPlayerDataApi(token);
          if (res?.data?.status === 'failed') {
           
          } else if (res?.data?.data?.length > 0) {
            navigation.replace('Summary'); 
          }
        }
      } catch (err) {
        console.log('Error checking user:', err);
      } finally {
        setLoading(false);
      }
    };

    checkExistingUser();
  }, []);

 
  const handleSendOtp = async () => {
    if (!isValid) return;
    setLoading(true);
    try {
      dispatch(setMobile(mobile));
      await sendOtpApi(mobile);
      navigation.navigate('Otp');
    } catch (err) {
      console.log('Send OTP error', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <View className="flex-1 justify-center items-center bg-primary px-6">
        <Loader visible={loading} fullscreen />
        <View className="mb-10 items-center">
          <Subtitle name="Login to Your Account" weight="Regular" color="primarytext" />
        </View>
        <View className="w-full">
          <Input value={mobile} onChangeText={setMobileNo} placeholder="1234567890" showCountryCode />
        </View>
        <View className="mt-6 w-full">
          <Button title="Send OTP" disabled={!isValid || loading} onPress={handleSendOtp} />
        </View>
      </View>
    </Wrapper>
  );
}
