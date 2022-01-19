/* eslint-disable no-alert */
import React, {createContext, useContext, useState} from 'react';
import {Alert} from 'react-native';
import {Housing, HousingFilters} from '../interfaces/housing.interfaces';
import {fetchHousingData} from '../services/housing.service';

export interface HousingContextData {
  selectedHousing?: Housing;
  allHousings: Housing[];
  filteredHousingArray: Housing[];
  loadingHousings: boolean;
  housingFilters: HousingFilters;

  setSelectedHousing: React.Dispatch<React.SetStateAction<Housing>>;
  setAllHousings: React.Dispatch<React.SetStateAction<Housing[]>>;
  setFilteredHousingArray: React.Dispatch<React.SetStateAction<Housing[]>>;
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
  const [filteredHousingArray, setFilteredHousingArray] = useState<
    Array<Housing>
  >([]);
  const [loadingHousings, setLoadingHousings] = useState(false);
  const [selectedHousing, setSelectedHousing] = useState<Housing>(
    {} as Housing,
  );
  const [housingFilters, setHousingFilters] = useState<HousingFilters>({
    filterPrice: '',
    filterBathrooms: '',
    filterBedrooms: '',
    filterParkingSpaces: '',
    filterUsableArea: '',
    filterFormattedAddress: '',
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
    console.log({housingFilters});
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
          bathrooms >= parseFloat(filterBathrooms || '0') &&
          bedrooms >= parseFloat(filterBedrooms || '0') &&
          price >= parseFloat(filterPrice || '0') &&
          usableArea >= parseFloat(filterUsableArea || '0') &&
          parkingSpaces >= parseFloat(filterParkingSpaces || '0') &&
          formattedAddress
            .toString()
            .toLowerCase()
            .includes(filterFormattedAddress.toString().toLowerCase()) &&
          publish === true
        );
      },
    );
  };

  const sortHousingData = (housingArray: Housing[]): Housing[] => {
    const sortedHousingArray = housingArray.sort((a, b) => a.price - b.price);
    return sortedHousingArray;
  };

  const handleApplyFilters = () => {
    const sortedHousingArray = sortHousingData(allHousings);
    const filteredHousingArray = filterHousingArray(sortedHousingArray);
    console.log('[Sorted + Filtered]', {length: filteredHousingArray.length});
    setFilteredHousingArray(filteredHousingArray || allHousings);
  };

  const handleGetHousingArray = async () => {
    const [housingArray, error] = await fetchHousingData();
    if (error) {
      Alert.alert('Error!', 'Unable to get Housing Data', [{text: 'OK'}]);
      return;
    }
    if (housingArray) {
      setAllHousings(housingArray);
      handleApplyFilters();
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
        filteredHousingArray,
        setFilteredHousingArray,
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
