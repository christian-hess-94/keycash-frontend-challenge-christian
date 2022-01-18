import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text } from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
interface MapScreenProps {}

const MapScreen: React.FunctionComponent<MapScreenProps> = ({}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const snapPoints = useMemo(() => ['25%', '50%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  bottomSheetRef.current?.snapToIndex(1);
  return (
    <View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}>
        <View style={{ height: 200, backgroundColor: 'red', flex: 1 }}>
          <Text>Awesome 🎉</Text>
        </View>
      </BottomSheet>
    </View>
  );
};

export default MapScreen;
