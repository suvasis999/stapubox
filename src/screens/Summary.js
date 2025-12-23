import React from 'react';
import { View, Text, Pressable,ScrollView } from 'react-native';
import Wrapper from '../component/Wrapper';
import Subtitle from '../component/Subtitle';
import Header from '../component/Header';

export default function Summary({ navigation }) {
  return (
   <Wrapper>
             
               <View className="flex-1  bg-primary">
                 <Header title="Your details" navigation={navigation} titleColor="primarytext" weight="Regular" 
                  size={16} 
                 showLogout={false} showBack={false}/>
                 <ScrollView>
                 <View className=" px-6 flex-1">
                   <View className="w-full mt-4 gap-2 mb-4">
                      <Subtitle name="Name" weight="Light" color="primarytext" size={14} />
                      <Subtitle name="antoine@soch.at" weight="Light" color="primarytext" size={16} />
                   </View>

                    <View className="w-full mt-4 gap-2 mb-4">
                      <Subtitle name="Address" weight="Normal" color="primarytext" size={14} />
                      <Subtitle name="ABC" weight="Light" color="primarytext" size={16} />
                   </View>

                   <View className="w-full mt-4 gap-2 mb-4">
                      <Subtitle name="Pin Code" weight="Normal" color="primarytext" size={14} />
                      <Subtitle name="ABC" weight="Light" color="primarytext" size={16} />
                   </View>

                    <View className="w-full mt-4 gap-2 mb-4">
                      <Subtitle name="Playing Status" weight="Normal" color="primarytext" size={14} />
                      <Subtitle name="Looking for playground" weight="Light" color="primarytext" size={16} />
                   </View>


                    <View className="w-full mt-4 gap-2 mb-4">
                      <Subtitle name="Sport you like" weight="Normal" color="primarytext" size={14} />
                      <Subtitle name="BasketBall" weight="Light" color="primarytext" size={16} />
                   </View>

                   <View className="w-full mt-4 gap-2 mb-4">
                      <Subtitle name="Feedback" weight="Normal" color="primarytext" size={14} />
                      <Subtitle name="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud " weight="Light" color="primarytext" size={16} />
                   </View>


                   

                 </View>
                 </ScrollView>
                 
               </View>
               </Wrapper>
  );
}
