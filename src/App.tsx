import React from 'react';
import {Div, Text, Button} from 'react-native-magnus';

import WideButton from './Components/WideButton';
import TitleText from './Components/TitleText';
import SeeButton from './Components/SeeButton';

const App = () => {
  return (
    <Div
      flex={1}
      justifyContent="center"
      alignItems="center"
      borderWidth={3}
      p="lg">
      <TitleText></TitleText>
      <WideButton putYujuName onPress={() => console.log('pressed')}>
        Press
      </WideButton>
      <SeeButton>버튼</SeeButton>
    </Div>
  );
};

export default App;
