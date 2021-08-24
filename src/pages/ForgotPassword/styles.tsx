import styled from "styled-components/native";

import { colors } from "../../styles/colors";
import { fonts } from "../../styles/fonts";

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 26px;
`;

export const Title = styled.Text`
  text-align: center;
  color: ${colors.blackTitle};
  font-family: ${fonts.workSans400};
  font-size: 24px;
  margin-bottom: 10px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  color: ${colors.info};
  font-family: ${fonts.workSans400};
  font-size: 14px;
  margin-bottom: 80px;
`;

export const ParagraphText = styled.Text`
  font-size: 16px;
  font-family: ${fonts.dmSans500};
  color: ${colors.black};
  margin-top: 32px;
`;
