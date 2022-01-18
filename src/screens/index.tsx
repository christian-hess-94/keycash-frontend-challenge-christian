import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import MapScreen from './map';

export type ScreensProps = {
  MapScreen: undefined;
};

const Screens: React.FC = () => {
  const { Navigator, Screen } = createNativeStackNavigator<ScreensProps>();

  return (
    <NavigationContainer>
      <Navigator initialRouteName="MapScreen">
        <Screen name="MapScreen" component={MapScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Screens;
