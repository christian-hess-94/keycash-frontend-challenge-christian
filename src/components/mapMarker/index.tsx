import React from 'react';
import {Marker, MarkerProps} from 'react-native-maps';

interface MapMarkerProps extends MarkerProps {}

const MapMarker: React.FunctionComponent<MapMarkerProps> = props => {
  return <Marker {...props} />;
};

export default MapMarker;
