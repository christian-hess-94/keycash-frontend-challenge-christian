import {Image, ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';

export const StyledScrollView = styled(ScrollView)`
  padding-horizontal: 16px;
`;

export const HousingInfoTextBig = styled(Text)`
  font-size: 18px;
  font-weight: bold;
  margin: 8px;
  color: darkslategray;
`;
export const HousingInfoTextSmall = styled(Text)`
  font-size: 13px;
  margin: 8px;
  color: gray;
`;
export const HousingInfoTooltip = styled(Text)`
  font-size: 13px;
  margin: 8px;
  color: lightgray;
`;
export const HousingPriceText = styled(Text)`
  font-size: 25px;
  font-weight: bold;
  color: darkgreen;
  margin: 8px;
  text-align: center;
`;
export const HousingImageThumbnail = styled(Image).attrs(() => ({
  resizeMode: 'cover',
  resizeMethod: 'scale',
}))`
  height: 240px;
  width: 33%;
  margin: 4px;
`;
