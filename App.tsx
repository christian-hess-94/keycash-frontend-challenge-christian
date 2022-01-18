import React from 'react';
import Screens from './src/screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { StyledGestureHandlerRootView } from './global-styles';
const App = () => {
  return (
    <StyledGestureHandlerRootView>
      <SafeAreaProvider>
        <Screens />
      </SafeAreaProvider>
    </StyledGestureHandlerRootView>
  );
};

export default App;
