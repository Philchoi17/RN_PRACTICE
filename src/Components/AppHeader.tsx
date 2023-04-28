import React from 'react';
import {Button, Icon, Header, HeaderProps, Text} from 'react-native-magnus';
import {useNavigation} from '@react-navigation/native';

interface IAppHeaderProps extends HeaderProps {
  backButton?: boolean;
}

const AppHeader: React.FC<IAppHeaderProps> = ({
  children,
  backButton,
  ...rest
}) => {
  return (
    <Header
      {...(backButton && {
        prefix: <Text>make back button</Text>,
      })}
      {...rest}>
      {children}
    </Header>
  );
};

export default AppHeader;
