import React from 'react';
import {Text, TextProps} from 'react-native-magnus';

interface ITitleTextProps extends TextProps {}

const TitleText: React.FC<ITitleTextProps> = () => {
  return (
    <Text fontWeight="700" fontSize="2xl">
      Center Me
    </Text>
  );
};

export default TitleText;
