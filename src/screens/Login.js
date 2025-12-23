import React,{useState} from 'react';
import { View, Text } from 'react-native';
import Wrapper from '../component/Wrapper';
import Subtitle from '../component/Subtitle';
import Input from '../component/Input';
import Button from '../component/Button';
import { useDispatch } from 'react-redux';

import { sendOtpApi } from '../config/service';
import { setMobile } from '../redux/slices/authSlice';
import Loader from '../component/Loader';

export default function Login({ navigation }) {
    const dispatch = useDispatch();
    const [mobile, setMobileNo] = useState('');
    const [loading, setLoading] = useState(false);
    const isValid = mobile.length === 10;
    

   

  const handleSendOtp = async () => {
        try {
            setLoading(true);
            dispatch(setMobile(mobile));
            const res = await sendOtpApi(mobile);
            console.log(res.data);
            setLoading(false);
            navigation.navigate('Otp');
        } catch (error) {
            console.log(error );
            setLoading(false);
        }
};
    return (
        <Wrapper>
            <View className="flex-1 justify-center items-center bg-primary px-6">
                
                 <Loader visible={loading} fullscreen />
               <View className="mb-10 items-center"> 
                <Subtitle
                    name="Login to Your Account"
                    weight="Regular"
                    color="primarytext" 
                />
            </View>
                <View className="w-full">
                    <Input
                        value={mobile}
                        onChangeText={setMobileNo}
                        placeholder="1234567890"
                        showCountryCode
                    />
                </View>

                
                <View className="mt-6 w-full">
                    <Button
                        title="Send OTP"
                        disabled={!isValid}
                        onPress={() => handleSendOtp()}
                    />
                </View>

               <View className="mt-8 flex-row">
                    <Subtitle
                    name="Don't have account? "
                    weight="Regular"
                    color="primarytext" 
                    size={12}
                    />
                    <Subtitle
                    name="Create Account"
                    weight="Regular"
                    color="link" 
                    size={12}
                    onPress={() => navigation.navigate('Otp')}
                    />
                   
                </View>
                
                
            </View>
        </Wrapper>
    );
}