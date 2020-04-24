import React, { createContext, ReactNode, useState } from 'react';
import { NavigationHelpers, ParamListBase } from '@react-navigation/native';
import { BottomTabNavigationEventMap } from '@react-navigation/bottom-tabs/lib/typescript/src/types';

type MultiBarExtrasRender = (props: {
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>
}) => ReactNode;

export type MultiBarContextProps = {
  data: MultiBarExtrasRender[];
  extrasVisible: boolean;
  iconSize: number;
  overlayRadius: number;
  setExtrasVisible: (visible: boolean) => void;
};

export const MultiBarContext = createContext<MultiBarContextProps>({} as MultiBarContextProps);

type Props = Pick<MultiBarContextProps, 'data'> & {
  iconSize?: number;
  initialExtrasVisible?: boolean;
  overlayRadius?: number;
};

export const MultiBarProvider: React.FC<Props> = ({
  children,
  data,
  iconSize = 30,
  initialExtrasVisible = false,
  overlayRadius = 80
}) => {
  const [extrasVisible, setExtrasVisible] = useState(initialExtrasVisible);

  return (
    <MultiBarContext.Provider value={{
      data,
      extrasVisible,
      iconSize,
      overlayRadius,
      setExtrasVisible
    }}>
      {children}
    </MultiBarContext.Provider>
  );
};
