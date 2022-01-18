import React from 'react';
import useHousing from '../../contexts/housing.context';
import MapMarker from '../mapMarker';
import {StyledMapView} from './styles';

interface MapProps {}

const Map: React.FunctionComponent<MapProps> = () => {
  const {allHousings} = useHousing();
  return (
    <StyledMapView
      initialRegion={{
        latitude: -23.58185,
        longitude: -46.67097,
        latitudeDelta: 0.0522,
        longitudeDelta: 0.0221,
      }}>
      {allHousings.map(
        ({
          id,
          address: {
            formattedAddress,
            geolocation: {lat, lng},
          },
        }) => (
          <MapMarker
            key={id}
            title={formattedAddress}
            coordinate={{latitude: lat, longitude: lng}}
          />
        ),
      )}
    </StyledMapView>
  );
};

export default Map;
