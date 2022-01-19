import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {ScrollView} from 'react-native';
import {ScreenStackParamList} from '..';
import Card from '../../components/card';
import {Row} from '../../components/layout/styles';
import {Housing} from '../../interfaces/housing.interfaces';
import {
  HousingInfoTextBig,
  HousingInfoTextSmall,
  HousingInfoTooltip,
  HousingPriceText,
  StyledScrollView,
} from './styles';

export interface HousingDetailsScreenProps {
  selectedHousing: Housing;
}

const HousingDetailsScreen: React.FC<
  NativeStackScreenProps<ScreenStackParamList, 'HousingDetailsScreen'>
> = ({
  route: {
    params: {
      selectedHousing: {
        price,
        bathrooms,
        bedrooms,
        parkingSpaces,
        usableArea,
        address: {
          formattedAddress,
          geolocation: {lat, lng},
        },
        images,
      },
    },
  },
}) => {
  return (
    <StyledScrollView>
      <Card>
        <HousingInfoTextBig>{formattedAddress}</HousingInfoTextBig>
        <HousingInfoTooltip>
          {lat} : {lng}
        </HousingInfoTooltip>
        <Card>
          <Row>
            <HousingInfoTextSmall>
              {bathrooms} bathrooms(s)
            </HousingInfoTextSmall>
            <HousingInfoTextSmall>{bedrooms} bedrooms(s)</HousingInfoTextSmall>
          </Row>
          <Row>
            <HousingInfoTextSmall>
              {usableArea}m² of usable area
            </HousingInfoTextSmall>
            <HousingInfoTextSmall>
              {parkingSpaces} parking space(s)
            </HousingInfoTextSmall>
          </Row>
        </Card>
        <HousingPriceText>$ {price}</HousingPriceText>
      </Card>
    </StyledScrollView>
  );
};

export default HousingDetailsScreen;
