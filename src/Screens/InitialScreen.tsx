import React from 'react';
import {Div, Text} from 'react-native-magnus';

import {useNavigation} from '@react-navigation/native';
import WideButton from '../Components/WideButton';
import AuthStack from '../Navigators/AuthStack';
import SeeButton from '../Components/SeeButton';

const InitialScreen = () => {
  const navigation = useNavigation<any>();

  console.log('navigation =', navigation);

  return (
    <Div flex={1}>
      <Text>INITIAL SCREEN</Text>
      <WideButton
        onPress={() => {
          navigation.navigate('Login');
        }}>
        Login with email and password
      </WideButton>
      <SeeButton
        onPress={() => {
          navigation.navigate('See');
        }}>
        가디언즈오브갤럭시
      </SeeButton>
    </Div>
  );
};

export default InitialScreen;
