import styled from 'styled-components/native';

import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

interface ContainerProps {
  isErrored: boolean;
  value?: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  height: 65px;
  border-width: 0.8px;
  border-color: ${({ isErrored }) => (isErrored ? colors.red : colors.purple)};
  border-radius: 12px;
  background-color: ${({ value }) =>
    value !== '' ? colors.purple : colors.inputBG};
  margin-bottom: 20px;
  padding: 20px;
  flex-direction: row;
  align-items: center;
`;

export const InputText = styled.TextInput`
  flex: 1;
  height: 50px;
  margin-right: 5px;
  font-size: 16px;
  font-family: ${fonts.dmSans400};
  color: ${({ value }) => (value !== '' ? colors.white : colors.purple)};
`;
