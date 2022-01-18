import {TextInput} from 'react-native';
import styled from 'styled-components/native';

export const StyledTextInput = styled(TextInput).attrs(() => ({
  placeholderTextColor: 'gray',
}))`
  color: darkslategray;
  border-bottom: 2px solid lightgray;
  background-color: white;
  padding: 4px;
  margin: 8px;
  flex: 1;
  border-radius: 8px;
`;
