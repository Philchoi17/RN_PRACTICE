import React from 'react';
import {Div, Text, Avatar} from 'react-native-magnus';

import {useNavigation} from '@react-navigation/native';
import WideButton from '../Components/WideButton';

import AppHeader from '../Components/AppHeader';
import SafeAreaContainer from '../Components/SafeAreaContainer';
import Images from '../Assets/Images';

const InitialScreen = () => {
  const navigation = useNavigation<any>();
  console.log('navigatiokn =', navigation);

  return (
    <SafeAreaContainer>
      <AppHeader>HEADER</AppHeader>
      <Div
        flex={1}
        justifyContent="center"
        alignItems="center"
        p="xl"
        bg="white">
        <Avatar source={Images.yuzu} size={100} />
        <Text>WELCOME TO YUJU's App</Text>
        <WideButton mt="lg">Start Your Development Journey</WideButton>
      </Div>
    </SafeAreaContainer>
  );
};

export default InitialScreen;
