import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/screens';
import {HousingProvider} from './src/contexts/housing.context';
import {PaginationProvider} from './src/contexts/pagination.context';
const App = () => {
  return (
    <PaginationProvider>
      <HousingProvider>
        <NavigationContainer>
          <Screens />
        </NavigationContainer>
      </HousingProvider>
    </PaginationProvider>
  );
};

export default App;
