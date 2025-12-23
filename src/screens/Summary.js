import React, { useEffect, useState } from 'react';
import { View, ScrollView } from 'react-native';
import Wrapper from '../component/Wrapper';
import Subtitle from '../component/Subtitle';
import Header from '../component/Header';
import { getPlayerDataApi } from '../config/service'; 
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../component/Loader';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { clearUser } from '../redux/slices/userSlice';

export default function Summary({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const token = useSelector(state => state.auth.token); 
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPlayerData();
  }, []);

  const fetchPlayerData = async () => {
    try {
      setLoading(true);
      const res = await getPlayerDataApi(token);
      setPlayerData(JSON.parse(res.data.data[0]));
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader visible={true} fullscreen />;

  if (!playerData) return null;

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('jwt_token');

      
      dispatch(clearUser());

     
      navigation.replace('Login');
    } catch (err) {
      console.log('Logout failed', err);
    }
  };

  return (
    <Wrapper>
      <View className="flex-1 bg-primary">
        <Header
          title="Your details"
          navigation={navigation}
          titleColor="primarytext"
          weight="Regular"
          size={16} 
          showLogout={true}
          showBack={false}
          onLogout={handleLogout}
        />
        <ScrollView>
          <View className="px-6 flex-1">
            <View className="w-full mt-4 gap-2 mb-4">
              <Subtitle name="Name" weight="Light" color="primarytext" size={14} />
              <Subtitle name={playerData?.name} weight="Light" color="primarytext" size={16} />
            </View>

            <View className="w-full mt-4 gap-2 mb-4">
              <Subtitle name="Address" weight="Normal" color="primarytext" size={14} />
              <Subtitle name={playerData?.address?.line1} weight="Light" color="primarytext" size={16} />
              <Subtitle name={playerData?.address?.line2} weight="Light" color="primarytext" size={16} />
            </View>

            <View className="w-full mt-4 gap-2 mb-4">
              <Subtitle name="Pin Code" weight="Normal" color="primarytext" size={14} />
              <Subtitle name={playerData?.address?.pincode} weight="Light" color="primarytext" size={16} />
            </View>

            <View className="w-full mt-4 gap-2 mb-4">
              <Subtitle name="Playing Status" weight="Normal" color="primarytext" size={14} />
              <Subtitle name="Looking for playground" weight="Light" color="primarytext" size={16} />
            </View>

            <View className="w-full mt-4 gap-2 mb-4">
              <Subtitle name="Sport you like" weight="Normal" color="primarytext" size={14} />
              <Subtitle name={playerData?.sport} weight="Light" color="primarytext" size={16} />
            </View>

            <View className="w-full mt-4 gap-2 mb-4">
              <Subtitle name="Feedback" weight="Normal" color="primarytext" size={14} />
              <Subtitle name={playerData?.feedback} weight="Light" color="primarytext" size={16} />
            </View>
          </View>
        </ScrollView>
      </View>
    </Wrapper>
  );
}
