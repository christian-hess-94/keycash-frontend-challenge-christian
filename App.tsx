import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Screens from './src/screens';
import {HousingProvider} from './src/contexts/housing.context';
const App = () => {
  return (
    <HousingProvider>
      <NavigationContainer>
        <Screens />
      </NavigationContainer>
    </HousingProvider>
  );
};

export default App;
