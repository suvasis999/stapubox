import React,{useState} from 'react';
import { View, Text, Pressable } from 'react-native';
import Wrapper from '../component/Wrapper';
import Header from '../component/Header';
import Subtitle from '../component/Subtitle';
import Button from '../component/Button';
import DropDownPicker from 'react-native-dropdown-picker';

export default function SportsDetails({ navigation }) {
   const [playStatus, setPlayStatus] = useState([
  { label: 'Partner', value: 'partner' },
  { label: 'Playground', value: 'playground' },
]);
   const [selectedPlayStatus, setSelectedPlayStatus] = useState('');
  const [likeSports, setLikeSports] = useState([]);
  const [selectedlikeSports, setselectedlikeSports] = useState('');
    const isValid =  selectedlikeSports !== null;
      const [open, setOpen] = useState(false);
      const [openSports, setOpenSports] = useState(false);
      
  return (
     <Wrapper>
          
            <View className="flex-1  bg-primary">
              <Header title="Enter your details" navigation={navigation} titleColor="primarytext" weight="Regular" 
               size={16} 
              showLogout={false} showBack={true}/>
              <View className=" px-6 flex-1">
                
                <View className="w-full mt-4 gap-2" style={{ zIndex: 2 }}>
                   <Subtitle
                      name="Playing Status"
                      weight="Light"
                      color="primarytext" 
                     size={12}
                      />
                       <DropDownPicker
                               open={open}
                               value={selectedPlayStatus}
                               items={playStatus}
                               setOpen={setOpen}
                               setValue={setSelectedPlayStatus}
                               setItems={setPlayStatus}
                               style={{ backgroundColor: '#2F2F2F', borderColor: '#FFFFFF33', borderRadius: 10 }}
                               textStyle={{ color: 'white' }}
                               dropDownContainerStyle={{ backgroundColor: '#2F2F2F', borderColor: '#FFFFFF33' }}
                               arrowIconStyle={{
                                   tintColor: '#FFFFFF' 
                               }}
                             />
                               </View>
                    <View className="w-full mt-4 gap-2" style={{ zIndex: 1 }}>
                   <Subtitle
                      name="Sport you like *"
                      weight="Light"
                      color="primarytext" 
                     size={12}
                      />
                       <DropDownPicker
                               open={openSports}
                               value={selectedlikeSports}
                               items={likeSports}
                               setOpen={setOpenSports}
                               setValue={setselectedlikeSports}
                               setItems={setLikeSports}
                               style={{ backgroundColor: '#2F2F2F', borderColor: '#FFFFFF33', borderRadius: 10 }}
                               textStyle={{ color: 'white' }}
                               dropDownContainerStyle={{ backgroundColor: '#2F2F2F', borderColor: '#FFFFFF33' }}
                               arrowIconStyle={{
                                   tintColor: '#FFFFFF' 
                               }}
                             />
                               </View>
                
           
        
               
              </View>
              <View className="mt-6 w-full absolute bottom-0 px-6">
                                  <Button
                                      title="Next"
                                      disabled={!isValid}
                                      onPress={() => navigation.navigate('Feedback')}
                                  />
                              </View>
            </View>
            </Wrapper>
  );
}
