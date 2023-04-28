import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InitialScreen from '../Screens/InitialScreen';
import LoginScreen from '../Screens/LoginScreen';
import SeeButton from '../Components/SeeButton';
import SeeScreen from '../Screens/SeeScreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Initial" component={InitialScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="See" component={SeeScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
