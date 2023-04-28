import React from 'react';
import {Div, DivProps} from 'react-native-magnus';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface ISafeAreaContainerProps extends DivProps {
  noSafeAreaTop?: boolean;
}

const SafeAreaContainer: React.FC<ISafeAreaContainerProps> = ({
  children,
  noSafeAreaTop,
}) => {
  const insets = useSafeAreaInsets();
  return (
    <Div
      bg="white"
      shadow="none"
      flex={1}
      {...(!noSafeAreaTop && {
        pt: insets.top,
      })}>
      {children}
    </Div>
  );
};

export default SafeAreaContainer;
