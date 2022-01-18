/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button, FlatList, ScrollView, TextInput, View} from 'react-native';
import {ScreenStackParamList} from '..';
import Card from '../../components/card';
import {StyledTextInput} from '../../components/housingInfo/styles';
import {Row} from '../../components/layout/styles';
import useHousing from '../../contexts/housing.context';

const HousingListScreen: React.FC<
  NativeStackScreenProps<ScreenStackParamList, 'HousingListScreen'>
> = ({navigation: {navigate}}) => {
  const {housingFilters, setHousingFilters, handleApplyFilters, allHousings} =
    useHousing();
  return (
    <ScrollView>
      <Card title="Filters">
        <StyledTextInput
          value={housingFilters.filterFormattedAddress}
          placeholder="Address"
        />
        <Row>
          <StyledTextInput
            value={housingFilters.filterBathrooms}
            placeholder="Bathrooms"
          />
          <StyledTextInput
            value={housingFilters.filterBedrooms}
            placeholder="Bedrooms"
          />
          <StyledTextInput
            value={housingFilters.filterParkingSpaces}
            placeholder="Parking Spaces"
          />
        </Row>
        <StyledTextInput
          value={housingFilters.filterUsableArea}
          placeholder="Usable Area (m²)"
        />
        <StyledTextInput
          value={housingFilters.filterPrice}
          placeholder="Price (minimum)"
        />
        <Row />
        <Button title="Apply Filters" onPress={handleApplyFilters} />
      </Card>
      {allHousings.map(item => {
        const {
          address: {
            formattedAddress,
            geolocation: {lat, lng},
          },
        } = item;
        return (
          <Card
            title={formattedAddress}
            subtitle={`${lat} : ${lng}`}
            buttons={[
              {title: 'All details', onPress: () => console.log({item})},
            ]}
          />
        );
      })}
    </ScrollView>
  );
};

export default HousingListScreen;
