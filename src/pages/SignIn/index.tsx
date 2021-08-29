import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import * as Yup from 'yup';

import Logo from '../../assets/logo.png';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { colors } from '../../styles/colors';
import { Container, Image, ParagraphText } from './styles';

import { useAuth } from '../../hooks/useAuth';

type ValidationErrors = {
  email: boolean;
};

export default function Login() {
  const navigation = useNavigation();
  const { signIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>(
    {} as ValidationErrors,
  );

  async function handleSubmit() {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('O email precisa ser válido'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(8, 'A senha precisa ter no mínimo 8 caracteres'),
      });

      let data = { email, password };

      await schema.validate(data, { abortEarly: false });

      await signIn(data);

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Autenticado com sucesso!',
      });

    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        err.inner.forEach(error => {
          setValidationErrors(state => {
            return {
              ...state,
              [error.path || '']: error.message,
            };
          });
        });

        return Toast.show({
          type: 'error',
          text1: 'Erro',
          text2: err.inner[0].message,
        });
      }
      Toast.show({
        type: 'error',
        text1: 'Erro',
        text2: 'Email/Senha invalido(a). Tente novamente.',
      });
    }
  }

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
      <Button onPress={handleSubmit}>Login</Button>
      <ParagraphText>
        Não tem conta?{' '}
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ParagraphText>Registar</ParagraphText>
        </TouchableWithoutFeedback>
      </ParagraphText>
    </Container>
  );
}
