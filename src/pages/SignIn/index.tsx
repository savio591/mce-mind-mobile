import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';


import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { colors } from '../../styles/colors';
import { Container, Image, ParagraphText } from './styles';

type ValidationErrors = {
  email: boolean;
};

export default function SignIn() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {} as ValidationErrors,
  );
  return (
    <Container>
      <Image source={Logo} />
      <Input
        placeholder="Login"
        placeholderTextColor={colors.gray}
        keyboardType="email-address"
        selectTextOnFocus
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCompleteType="email"
        error={!!validationErrors.email}
        value={email}
        onChangeText={text => setEmail(text)}
      >
        <Ionicons
          name="checkmark-circle-sharp"
          size={22}
          color={colors.inputBG}
        />
      </Input>

      <Input
        placeholder="Senha"
        textContentType="password"
        placeholderTextColor={colors.gray}
        selectTextOnFocus
        secureTextEntry={!showPassword}
        error={!!validationErrors['senha']}
        value={password}
        onChangeText={text => setPassword(text)}
      >
        <TouchableWithoutFeedback
          onPress={() => setShowPassword(state => !state)}
        >
          {showPassword ? (
            <Ionicons
              name="eye-off"
              color={password !== '' ? colors.white : colors.gray}
              size={24}
            />
          ) : (
            <Ionicons
              name="eye"
              color={password !== '' ? colors.white : colors.gray}
              size={24}
            />
          )}
        </TouchableWithoutFeedback>
      </Input>
      <Button>Login</Button>
      <ParagraphText>
        Não tem conta?{' '}
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ParagraphText>Registar</ParagraphText>
        </TouchableWithoutFeedback>
      </ParagraphText>
    </Container>
  );
}
