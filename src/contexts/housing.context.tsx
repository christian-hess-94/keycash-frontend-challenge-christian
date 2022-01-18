/* eslint-disable no-alert */
import React, {createContext, useContext, useState} from 'react';
import {Alert} from 'react-native';
import {Housing, HousingFilters} from '../interfaces/housing.interfaces';
import {fetchHousingData} from '../services/housing.service';

export interface HousingContextData {
  selectedHousing?: Housing;
  allHousings: Housing[];
  loadingHousings: boolean;
  housingFilters: HousingFilters;

  setSelectedHousing: React.Dispatch<React.SetStateAction<Housing>>;
  setAllHousings: React.Dispatch<React.SetStateAction<Housing[]>>;
  setLoadingHousings: React.Dispatch<React.SetStateAction<boolean>>;
  setHousingFilters: React.Dispatch<React.SetStateAction<HousingFilters>>;

  handleGetHousingArray: () => void;
  handleApplyFilters: () => void;
}

const HousingContext = createContext<HousingContextData>(
  {} as HousingContextData,
);

export const HousingProvider: React.FC = ({children}) => {
  const [allHousings, setAllHousings] = useState<Array<Housing>>([]);
  const [loadingHousings, setLoadingHousings] = useState(false);
  const [selectedHousing, setSelectedHousing] = useState<Housing>(
    {} as Housing,
  );
  const [housingFilters, setHousingFilters] = useState<HousingFilters>({
    filterBedrooms: '0',
  } as HousingFilters);
  const {
    filterPrice,
    filterBathrooms,
    filterBedrooms,
    filterParkingSpaces,
    filterUsableArea,
    filterFormattedAddress,
  } = housingFilters;

  const filterHousingArray = (unfilteredHousingArray: Housing[]): Housing[] => {
    return unfilteredHousingArray.filter(
      ({
        price,
        bathrooms,
        bedrooms,
        parkingSpaces,
        usableArea,
        address: {formattedAddress},
        publish,
      }) => {
        return (
          (price >= parseFloat(filterPrice) ||
            bathrooms >= parseFloat(filterBathrooms) ||
            bedrooms >= parseFloat(filterBedrooms) ||
            parkingSpaces >= parseFloat(filterParkingSpaces) ||
            usableArea >= parseFloat(filterUsableArea) ||
            formattedAddress.toString().includes(filterFormattedAddress)) &&
          publish === true
        );
      },
    );
  };

  const sortHousingData = (housingArray: Housing[]): Housing[] => {
    const sortedHousingArray = housingArray.sort((a, b) => a.price - b.price);
    return sortedHousingArray;
  };

  const handleApplyFilters = () => {};

  const handleGetHousingArray = async () => {
    const [housingArray, error] = await fetchHousingData();
    if (error) {
      Alert.alert('Error!', 'Unable to get Housing Data', [{text: 'OK'}]);
      return;
    }
    if (housingArray) {
      const sortedHousingArray = sortHousingData(housingArray);
      const filteredHousingArray = filterHousingArray(sortedHousingArray);
      console.log('[Sorted + Filtered]', {length: filteredHousingArray.length});
      console.log(JSON.stringify(filteredHousingArray));
      setAllHousings(filteredHousingArray || housingArray);
    }
  };

  return (
    <HousingContext.Provider
      value={{
        selectedHousing,
        setSelectedHousing,
        allHousings,
        loadingHousings,
        setAllHousings,
        setLoadingHousings,
        housingFilters,
        setHousingFilters,

        handleGetHousingArray,
        handleApplyFilters,
      }}>
      {children}
    </HousingContext.Provider>
  );
};

const useHousing = () => {
  const context = useContext(HousingContext);
  if (!context) {
    throw new Error('useHousing must be used within <HousingProvider>');
  }
  return context;
};

export default useHousing;
