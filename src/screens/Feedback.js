import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import Wrapper from '../component/Wrapper';
import Header from '../component/Header';
import Subtitle from '../component/Subtitle';
import Button from '../component/Button';
import Input from '../component/Input';
import { useDispatch, useSelector } from 'react-redux';
import { setFeedback } from '../redux/slices/userSlice';
import Loader from '../component/Loader';
import { submitData } from '../config/service';


export default function Feedback({ navigation }) {
  const dispatch = useDispatch();
  const [feedback, setFeedbackData] = useState('');
  const isValid =  feedback.trim() !== '';
  const [loading, setLoading] = useState(false);

    const user = useSelector(state => state.user);
    console.log('user:', user);

  const handleSubmit = async () => {
  if (!isValid) return;

  dispatch(setFeedback(feedback));

  const playerData = {
    name: user.name,
    address: {
      line1: user.address,
      line2: user.address2 || '',
      pincode: user.pin,
    },
    maritalStatus: user.maritalStatus || 'nodata',
    sport: user.likedSport,
    feedback: feedback,
  };

  try {
    setLoading(true);
    
console.log(playerData);
    const res = await submitData(playerData);
    console.log(res.data);
    navigation.replace('Summary');
   
  } catch (err) {
    
  } finally {
    setLoading(false);
  }
};


  return (
    <Wrapper>
          
            <View className="flex-1  bg-primary">
              <Header title="Share Your Feedback" navigation={navigation} titleColor="primarytext" weight="Regular" 
               size={16} 
              showLogout={false} showBack={true}/>
              <View className=" px-6 flex-1">
                <Loader visible={loading} fullscreen />
                <View className="w-full mt-4 gap-2">
                   <Subtitle
                      name="Feedback"
                      weight="Light"
                      color="primarytext" 
                     size={12}
                      />
                  <Input
                value={feedback}
                onChangeText={setFeedbackData}
                placeholder="Enter your feedback"
                multiline
                numberOfLines={4}
              />
                               </View>
                   
               
              </View>
              <View className="mt-6 w-full absolute bottom-0 px-6">
                                  <Button
                                      title="Submit"
                                      disabled={!isValid}
                                      onPress={() =>handleSubmit() }
                                  />
                              </View>
            </View>
            </Wrapper>
  );
}
