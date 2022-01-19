/* eslint-disable react-hooks/exhaustive-deps */
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {View} from 'react-native';
import {Button, ScrollView} from 'react-native';
import {ScreenStackParamList} from '..';
import Card from '../../components/card';
import {CardTextItem, CardTextPrice} from '../../components/card/styles';
import {StyledTextInput} from '../../components/housingInfo/styles';
import {Row} from '../../components/layout/styles';
import useHousing from '../../contexts/housing.context';

const HousingListScreen: React.FC<
  NativeStackScreenProps<ScreenStackParamList, 'HousingListScreen'>
> = () => {
  const {
    housingFilters,
    setHousingFilters,
    handleApplyFilters,
    filteredHousingArray,
  } = useHousing();
  return (
    <ScrollView>
      <Card title={`Filters (${filteredHousingArray.length})`}>
        <StyledTextInput
          value={housingFilters.filterFormattedAddress}
          placeholder="Address"
          onChangeText={filterFormattedAddress =>
            setHousingFilters({...housingFilters, filterFormattedAddress})
          }
        />
        <Row>
          <StyledTextInput
            value={housingFilters.filterBathrooms}
            placeholder="Bathrooms (max)"
            onChangeText={filterBathrooms =>
              setHousingFilters({...housingFilters, filterBathrooms})
            }
            keyboardType="number-pad"
          />
          <StyledTextInput
            value={housingFilters.filterBedrooms}
            placeholder="Bedrooms (max)"
            onChangeText={filterBedrooms =>
              setHousingFilters({...housingFilters, filterBedrooms})
            }
            keyboardType="number-pad"
          />
        </Row>
        <Row>
          <StyledTextInput
            value={housingFilters.filterUsableArea}
            placeholder="Usable Area (min)"
            onChangeText={filterUsableArea =>
              setHousingFilters({...housingFilters, filterUsableArea})
            }
            keyboardType="number-pad"
          />
          <StyledTextInput
            value={housingFilters.filterPrice}
            placeholder="Price (min)"
            onChangeText={filterPrice =>
              setHousingFilters({...housingFilters, filterPrice})
            }
            keyboardType="number-pad"
          />
        </Row>
        <StyledTextInput
          value={housingFilters.filterParkingSpaces}
          placeholder="Parking Spaces (min)"
          onChangeText={filterParkingSpaces =>
            setHousingFilters({...housingFilters, filterParkingSpaces})
          }
          keyboardType="number-pad"
        />
        <Button title="Apply Filters" onPress={handleApplyFilters} />
      </Card>
      {filteredHousingArray.map(item => {
        const {
          address: {
            formattedAddress,
            geolocation: {lat, lng},
          },
          bathrooms,
          bedrooms,
          price,
        } = item;
        return (
          <Card
            title={formattedAddress}
            subtitle={`${lat} : ${lng}`}
            content={
              <View>
                <Row>
                  <CardTextItem>{bathrooms} bathroom(s)</CardTextItem>
                  <CardTextItem>{bedrooms} bedroom(s)</CardTextItem>
                </Row>
                <CardTextPrice>$ {price}</CardTextPrice>
              </View>
            }
            buttons={[
              {title: 'All details', onPress: () => handleApplyFilters()},
            ]}
          />
        );
      })}
    </ScrollView>
  );
};

export default HousingListScreen;
