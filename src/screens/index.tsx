import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HousingDetailsScreen, {
  HousingDetailsScreenProps,
} from './housingDetails';
import HousingListScreen from './housingList';
import MapScreen from './map';

export type ScreenStackParamList = {
  MapScreen: undefined;
  HousingListScreen: undefined;
  HousingDetailsScreen: HousingDetailsScreenProps;
};

const Screens: React.FC = () => {
  const {Navigator, Screen} =
    createNativeStackNavigator<ScreenStackParamList>();

  return (
    <Navigator initialRouteName="MapScreen">
      <Screen
        name="MapScreen"
        component={MapScreen}
        options={{header: () => null}}
      />
      <Screen name="HousingListScreen" component={HousingListScreen} />
      <Screen name="HousingDetailsScreen" component={HousingDetailsScreen} />
    </Navigator>
  );
};

export default Screens;
