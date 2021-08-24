import React, { ReactNode } from 'react';
import { TextInputAndroidProps, TextInputProps } from 'react-native';

import { Container, InputText } from './styles';

interface InputProps extends Omit<TextInputProps, "selectionState"> {
  error?: boolean;
  children?: ReactNode;
  value?: string;
}

export function Input({ error = false, children, ...rest }: InputProps) {
  return (
    <Container isErrored={error} value={{ ...rest }.value}>
      <InputText {...rest} />
      {children}
    </Container>
  );
}
