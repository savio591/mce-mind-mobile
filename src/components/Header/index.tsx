import React from 'react';
import { Avatar } from 'react-native-elements';
import { Container, NameText, TextsDiv, WelcomeText } from './styles';

export function Header() {
  return (
    <Container>
      <Avatar
        avatarStyle={{ width: 50, height: 50, borderRadius: 50 }}
        containerStyle={{ width: 50, height: 50, borderRadius: 50 }}
        title="Usuário"
        source={{ uri: 'https://github.com/savio591.png' }}
        rounded
      />
      <TextsDiv>
        <WelcomeText>Bem-vindo(a)</WelcomeText>
        <NameText>Usuário</NameText>
      </TextsDiv>
    </Container>
  );
}
