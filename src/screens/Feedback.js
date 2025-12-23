import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import Wrapper from '../component/Wrapper';
import Header from '../component/Header';
import Subtitle from '../component/Subtitle';
import Button from '../component/Button';
import Input from '../component/Input';
export default function Feedback({ navigation }) {
  const [feedback, setFeedback] = useState('');
  const isValid =  feedback.trim() !== '';
  return (
    <Wrapper>
          
            <View className="flex-1  bg-primary">
              <Header title="Share Your Feedback" navigation={navigation} titleColor="primarytext" weight="Regular" 
               size={16} 
              showLogout={false} showBack={true}/>
              <View className=" px-6 flex-1">
                
                <View className="w-full mt-4 gap-2">
                   <Subtitle
                      name="Feedback"
                      weight="Light"
                      color="primarytext" 
                     size={12}
                      />
                  <Input
                value={feedback}
                onChangeText={setFeedback}
                placeholder="Enter your feedback"
                multiline
                numberOfLines={4}
              />
                               </View>
                   
               
              </View>
              <View className="mt-6 w-full absolute bottom-0 px-6">
                                  <Button
                                      title="Next"
                                      disabled={!isValid}
                                      onPress={() => navigation.navigate('Summary')}
                                  />
                              </View>
            </View>
            </Wrapper>
  );
}
