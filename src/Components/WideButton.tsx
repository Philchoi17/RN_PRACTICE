import React from 'react';
import {Button, ButtonProps} from 'react-native-magnus';

interface IButtonProps extends ButtonProps {
  putYujuName?: boolean;
}

const WideButton: React.FC<IButtonProps> = ({
  putYujuName,
  children,
  ...rest
}) => {
  return (
    <Button block {...rest}>
      {putYujuName ? 'Yuju' : children}
    </Button>
  );
};

export default WideButton;
