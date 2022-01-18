/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {ScreenStackParamList} from '..';

const HousingListScreen: React.FC<
  NativeStackScreenProps<ScreenStackParamList, 'HousingListScreen'>
> = ({navigation: {navigate}}) => {
  return <View />;
};

export default HousingListScreen;
