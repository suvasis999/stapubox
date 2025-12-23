import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '../screens/Login';
import Otp from '../screens/Otp';
import UserDetails from '../screens/UserDetails';
import SportsDetails from '../screens/SportsDetails';
import Feedback from '../screens/Feedback';
import Summary from '../screens/Summary';

const Stack = createNativeStackNavigator();

export default function NavStack() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
        animation: 'slide_from_right',
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="UserDetails" component={UserDetails} />
      <Stack.Screen name="SportsDetails" component={SportsDetails} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="Summary" component={Summary} />
    </Stack.Navigator>
  );
}
