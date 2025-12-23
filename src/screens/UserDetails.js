import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import Wrapper from '../component/Wrapper';
import Header from '../component/Header';
import Subtitle from '../component/Subtitle';
import Button from '../component/Button';
import Input from '../component/Input';
import { setUserDetails } from '../redux/slices/userSlice';
import { useDispatch } from 'react-redux';

export default function UserDetails({ navigation }) {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [address2, setAddress2] = useState('');
  const [pin, setPin] = useState('');  
  const isValid = name.trim() !== '' && (address.trim() !== '' || address2.trim() !== '') && pin.trim() !== '';

const handleNext = () => {
    dispatch(
      setUserDetails({
        name,
        address: address || address2,
        pin,
      })
    );

    navigation.navigate('SportsDetails');
  };
  return (
    <Wrapper>
      
        <View className="flex-1  bg-primary">
          <Header title="Enter your details" navigation={navigation} titleColor="primarytext" weight="Regular" 
           size={16} 
          showLogout={false} showBack={false}/>
          <View className=" px-6 flex-1">
            
            <View className="w-full mt-4 gap-2">
               <Subtitle
                  name="Name*"
                  weight="Light"
                  color="primarytext" 
                 size={12}
                  />
                               <Input
                                   value={name}
                                   onChangeText={setName}
                                   placeholder="Enter your name"
                                   showCountryCode={false}
                                     keyboardType="default"

                               />
                           </View>
            <View className="w-full mt-4 gap-2 mb-4">
               <Subtitle
                  name="Address*"
                  weight="Light"
                  color="primarytext" 
                 size={12}
                  />
                               <Input
                                   value={address}
                                   onChangeText={setAddress}
                                   placeholder="Enter your address"
                                   showCountryCode={false}
                                     keyboardType="default"
                               />
                           <Input
                                   value={address2}
                                   onChangeText={setAddress2}
                                   placeholder="Enter your address"
                                   showCountryCode={false}
                                     keyboardType="default"

                               />
                           </View>
        <View className="w-full mt-2 gap-2">
               <Subtitle
                  name="PinCode*"
                  weight="Light"
                  color="primarytext" 
                 size={12}
                  />
                               <Input
                                   value={pin}
                                   onChangeText={setPin}
                                   placeholder="Enter your pin code"
                                   showCountryCode={false}
                                        keyboardType={"phone-pad"}
                               />
                           </View>
    
           
          </View>
          <View className="mt-6 w-full absolute bottom-0 px-6">
                              <Button
                                  title="Next"
                                  disabled={!isValid}
                                  onPress={handleNext}
                              />
                          </View>
        </View>
        </Wrapper>
  );
}
