import styled from 'styled-components/native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  height: 50px;
`;

export const TextsDiv = styled.View`
  margin-top: 6px;
  flex: 1;
  flex-direction: column;
  margin-left: 16px;
  height: 50px;
`;

export const WelcomeText = styled.Text`
  color: ${colors.gray};
  font-family: ${fonts.dmSans400};
  font-size: 12px;
  line-height: 16px;
`;
export const NameText = styled.Text`
  color: ${colors.blackSubtitle};
  font-family: ${fonts.dmSans500};
  font-size: 16px;
  line-height: 21px;
`;
