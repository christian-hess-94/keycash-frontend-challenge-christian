import {Text, View} from 'react-native';
import styled from 'styled-components/native';

export const CardContainer = styled(View)`
  margin: 8px;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid lightgray;
  box-shadow: 2px 2px 2px;
`;

export const CardTitle = styled(Text)`
  font-size: 16px;
  font-weight: bold;
  color: darkslategray;
`;
export const CardSubtitle = styled(Text)`
  font-size: 15px;
  color: darkslategray;
`;
