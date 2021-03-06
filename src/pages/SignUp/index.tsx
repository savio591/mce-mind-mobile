import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import * as Yup from 'yup';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import { Container, ParagraphText } from './styles';
import { colors } from '../../styles/colors';

// import { api } from '../../services/api';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const [validationErrors, setValidationErrors] = useState({});

  const navigation = useNavigation();

  async function handleSaveRegister() {
    try {
      setValidationErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .required('Email obrigatório')
          .email('O email precisa ser válido'),
        name: Yup.string().required('Nome obrigatório'),
        password: Yup.string()
          .required('Senha obrigatória')
          .min(6, 'A senha precisa ter no mínimo 6 caracteres'),
        confirmaPassword: Yup.string().oneOf(
          [Yup.ref('password'), null],
          'As senhas precisam ser iguais',
        ),
      });

      let data = { name, email, password, confirmPassword };

      await schema.validate(data, { abortEarly: false });

      // await api.post('/users', data);

      Toast.show({
        type: 'success',
        text1: 'Sucesso',
        text2: 'Cadastro realizado com sucesso',
      });

      navigation.goBack();
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
        text2: 'Não foi possivel realizar o cadastro, tente novamente.',
      });
    }
  }

  return (
    <Container>
      <Input
        placeholder="E-mail"
        keyboardType="email-address"
        selectTextOnFocus
        textContentType="emailAddress"
        autoCapitalize="none"
        autoCompleteType="email"
        error={!!validationErrors['email']}
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Input
        placeholder="Nome"
        selectTextOnFocus
        textContentType="name"
        autoCapitalize="words"
        autoCompleteType="name"
        error={!!validationErrors['name']}
        value={name}
        onChangeText={text => setName(text)}
      />

      <Input
        placeholder="Celular/Telefone"
        placeholderTextColor={colors.gray}
        selectTextOnFocus
        keyboardType="numeric"
        error={!!validationErrors['phone']}
        value={phone}
        onChangeText={newPhone => setPhone(newPhone)}
      />

      <Input
        placeholder="Senha"
        textContentType="password"
        selectTextOnFocus
        secureTextEntry={!showPassword}
        error={!!validationErrors['password']}
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

      <Input
        placeholder="Confirmar senha"
        textContentType="password"
        selectTextOnFocus
        secureTextEntry={!showPasswordConfirmation}
        error={!!validationErrors['confirmPassword']}
        value={confirmPassword}
        onChangeText={text => setConfirmPassword(text)}
      >
        <TouchableWithoutFeedback
          onPress={() => setShowPasswordConfirmation(state => !state)}
        >
          {showPasswordConfirmation ? (
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

      <Button onPress={handleSaveRegister}>Cadastrar</Button>

      <ParagraphText>
        Já possui uma conta?{' '}
        <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
          <ParagraphText>Entrar</ParagraphText>
        </TouchableWithoutFeedback>
      </ParagraphText>
    </Container>
  );
}
