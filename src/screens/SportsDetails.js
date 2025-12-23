import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import Wrapper from '../component/Wrapper';
import Header from '../component/Header';
import Subtitle from '../component/Subtitle';
import Button from '../component/Button';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch, useSelector } from 'react-redux';

import { getSportsApi } from '../config/service';
import { setPlayStatus, setLikedSport } from '../redux/slices/userSlice';

export default function SportsDetails({ navigation }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);


  const [playStatusItems, setPlayStatusItems] = useState([
    { label: 'Partner', value: 'partner' },
    { label: 'Playground', value: 'playground' },
  ]);

  const [selectedPlayStatus, setSelectedPlayStatus] = useState(user.playStatus);
  const [sportsItems, setSportsItems] = useState([]);
  const [selectedLikedSport, setSelectedLikedSport] = useState(user.likedSport);

  const [openPlay, setOpenPlay] = useState(false);
  const [openSports, setOpenSports] = useState(false);

  const isValid = !!selectedLikedSport;

 
  useEffect(() => {
    fetchSports();
  }, []);

  const fetchSports = async () => {
    try {
      const res = await getSportsApi();
      console.log(res.data.data);
      const formatted = res.data.data.map(item => ({
        label: item.sport_name,
        value: item.sport_id,
      }));
      setSportsItems(formatted);
    } catch (err) {
      console.log('Sports API error:', err);
    }
  };


  useEffect(() => {
    if (selectedPlayStatus) {
      dispatch(setPlayStatus(selectedPlayStatus));
    }
  }, [selectedPlayStatus]);

  useEffect(() => {
    if (selectedLikedSport) {
      dispatch(setLikedSport(selectedLikedSport));
    }
  }, [selectedLikedSport]);


  return (
    <Wrapper>
      <View className="flex-1 bg-primary">
        <Header
          title="Enter your details"
          showLogout={false}
          showBack
        />

        <View className="px-6 flex-1">
         
          <View className="mt-4 gap-2" style={{ zIndex: 2}}>
            <Subtitle name="Playing Status" size={12} />
            <DropDownPicker
              open={openPlay}
              value={selectedPlayStatus}
              items={playStatusItems}
              
              setOpen={(value) => {
              setOpenSports(false);
              setOpenPlay(value); 
            }}
              setValue={setSelectedPlayStatus}
              setItems={setPlayStatusItems}
              style={{ backgroundColor: '#2F2F2F', borderColor: '#FFFFFF33' }}
              textStyle={{ color: 'white' }}
              dropDownContainerStyle={{ backgroundColor: '#2F2F2F' }}
            />
          </View>

          
          <View className="mt-4 gap-2" style={{ zIndex: 1 }}>
            <Subtitle name="Sport you like *" size={12} />
            <DropDownPicker
              open={openSports}
              value={selectedLikedSport}
              items={sportsItems}
              setOpen={(value) => {
              setOpenSports(value);
              setOpenPlay(false); 
            }}
              setValue={setSelectedLikedSport}
              setItems={setSportsItems}
              style={{ backgroundColor: '#2F2F2F', borderColor: '#FFFFFF33' }}
              textStyle={{ color: 'white' }}
              dropDownContainerStyle={{ backgroundColor: '#2F2F2F' }}
              listMode="SCROLLVIEW"
               maxHeight={250}
            />
          </View>
        </View>
        

       
        <View className="absolute bottom-0 w-full px-6 mb-6">
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
