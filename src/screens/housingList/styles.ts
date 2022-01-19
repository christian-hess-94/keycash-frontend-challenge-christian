import {Picker} from '@react-native-picker/picker';
import {Text, View} from 'react-native';
import styled from 'styled-components/native';

export const StyledPickerContainer = styled(View)`
  background-color: white;
  border-radius: 6px;
  margin: 8px;
  padding: 8px;
`;
export const StyledPickerText = styled(Text)`
  color: darkslategray;
`;
export const StyledPicker = styled(Picker)`
  color: black;
`;
