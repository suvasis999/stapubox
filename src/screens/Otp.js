import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import Wrapper from '../component/Wrapper';
import Header from '../component/Header';
import Subtitle from '../component/Subtitle';
import OtpInput from '../component/OtpInput';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtpApi } from '../config/service';
export default function Otp({ navigation }) {
     const dispatch = useDispatch();
    const mobile = useSelector(state => state.auth.mobile);
    const [otp, setOtp] = useState(["", "", "", ""]);

   console.log(mobile);

  return (
    <Wrapper>
  
    <View className="flex-1  bg-primary">
      <Header title="Phone Verification" navigation={navigation} titleColor="primarytext" weight="Regular"  size={16} 
      showLogout={false}/>
      <View className=" px-6">
        <View className="mb-10"> 
      <Subtitle
      name="Enter 4 digit OTP sent to your phone number"
      weight="Light"
      color="primarytext" 
     
      />
    </View>
    <View>
        <OtpInput length={4}  otp={otp} setOtp={setOtp}/>
    </View>

      <Subtitle
                        name="Resend OTP"
                        weight="Regular"
                        color="link" 
                        size={12}
                        onPress={() => navigation.navigate('UserDetails')}
                        />
      
      </View>
    </View>
    </Wrapper>
  );
}
