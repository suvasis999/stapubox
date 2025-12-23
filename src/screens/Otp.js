import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Wrapper from '../component/Wrapper';
import Header from '../component/Header';
import Subtitle from '../component/Subtitle';
import OtpInput from '../component/OtpInput';
import { useSelector } from 'react-redux';
import { verifyOtpApi, resendOtpApi, getPlayerDataApi } from '../config/service';
import Loader from '../component/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Otp({ navigation }) {
  const mobile = useSelector(state => state.auth.mobile);
  const [otp, setOtp] = useState(['', '', '', '']);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
  useEffect(() => {
    const enteredOtp = otp.join('').replace(/\s/g, '');
    if (loading || enteredOtp.length !== 4 || otp.includes('')) return;
    verifyOtp(enteredOtp);
  }, [otp]);

  const verifyOtp = async (enteredOtp) => {
    try {
      setLoading(true);
      setError('');

      const res = await verifyOtpApi(mobile, enteredOtp);

      if (res.data.status !== 'failed') {
        const token = res.data.data[0].token;

     
        await AsyncStorage.setItem('jwt_token', token);

       
        const playerRes = await getPlayerDataApi(token);

        if (playerRes.data.status === 'failed') {
         
          navigation.replace('UserDetails');
        } else {
          
          navigation.replace('Summary');
        }
      } else {
        setError(res.data.msg || 'Invalid OTP.');
        setOtp(['', '', '', '']); 
      }
    } catch (err) {
      setError(err?.response?.data?.msg || 'Invalid OTP.');
      setOtp(['', '', '', '']); 
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    try {
      setLoading(true);
      setError('');
      setOtp(['', '', '', '']); 
      await resendOtpApi(mobile);
      console.log('OTP resent successfully');
    } catch (err) {
      setError('Failed to resend OTP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Wrapper>
      <View className="flex-1 bg-primary px-6">
        <Header
          title="Phone Verification"
          navigation={navigation}
          titleColor="primarytext"
          weight="Regular"
          size={16}
          showLogout={false}
        />
        <Loader visible={loading} fullscreen />
        <View className="mb-10 mt-4">
          <Subtitle
            name="Enter 4 digit OTP sent to your phone number"
            weight="Light"
            color="primarytext"
          />
        </View>
        <OtpInput length={4} otp={otp} setOtp={setOtp} />
        {error ? (
          <Subtitle
            name={error}
            weight="Regular"
            color="errortext"
            size={12}
            className="mt-2"
          />
        ) : null}
        <View className="mt-6">
          <Subtitle
            name="Resend OTP"
            weight="Regular"
            color="link"
            size={12}
            onPress={resendOtp}
          />
        </View>
      </View>
    </Wrapper>
  );
}
