/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {Button, View} from 'react-native';
import {ScreenStackParamList} from '..';
import Map from '../../components/map';
import useHousing from '../../contexts/housing.context';
import {ListButtonContainer} from './styles';

const MapScreen: React.FC<
  NativeStackScreenProps<ScreenStackParamList, 'MapScreen'>
> = ({navigation: {navigate}}) => {
  const {handleGetHousingArray} = useHousing();
  useEffect(() => {
    handleGetHousingArray();
  }, []);
  return (
    <View>
      <Map />
      <ListButtonContainer>
        <Button
          title="Go to Housing List"
          onPress={() => navigate('HousingListScreen')}
        />
      </ListButtonContainer>
    </View>
  );
};

export default MapScreen;
