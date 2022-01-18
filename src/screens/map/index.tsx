/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect} from 'react';
import Map from '../../components/map';
import useHousing from '../../contexts/housing.context';

interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = ({}) => {
  const {handleGetHousingArray} = useHousing();
  useEffect(() => {
    handleGetHousingArray();
  }, []);
  return <Map />;
};

export default MapScreen;
