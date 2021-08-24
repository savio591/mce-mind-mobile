import React, { createContext, useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { api } from '../services/api';

type User = {
  name: string;
  email: string;
  phone?: string;
};

interface AuthContextData {
  user: User;
  loading: boolean;
  signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void>;
  // signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export function AuthProvider({ children }) {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStoragedData() {
      const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
        '@Mindeducation:user',
        '@Mindeducation:token',
      ]);

      if (storagedToken[1] && storagedUser[1]) {
        api.defaults.headers.authorization = `Bearer ${storagedToken[1]}`;
        setUser(JSON.parse(storagedUser[1]));
      }

      setLoading(false);
    }
    loadStoragedData();
  }, []);

  async function signIn({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> {
    const response = await api.post<{ secret: string }>('/signin', {
      email,
      password,
    });

    api.defaults.headers.authorization = `Bearer ${response.data.secret}`;

    const userResponse = await api.get<{
      name: string;
      email: string;
      image: string;
    }>('/profile');

    setUser(userResponse.data);

    try {
      await AsyncStorage.setItem(
        '@Mindeducation:user',
        JSON.stringify(userResponse.data),
      );
      await AsyncStorage.setItem(
        '@Mindeducation:token',
        JSON.stringify(response.data.secret),
      );
    } catch {
      Toast.show({
        type: 'error',
        position: 'bottom',
        text1: 'Erro',
        text2:
          'Não foi possível salvar alguma informação, tente relogar no app.',
      });
    }
  }

  // const signOut = useCallback(async () => {
  //   try {
  //     await AsyncStorage.removeItem('@Mindeducation:user');
  //     await AsyncStorage.removeItem('@Mindeducation:token');

  //     setUser(undefined);
  //   } catch {
  //     Toast.show({
  //       type: 'error',
  //       position: 'bottom',
  //       text1: 'Erro',
  //       text2: 'Não foi possível remover alguma informação.',
  //     });
  //   }
  // }, []);

  // const recover = useCallback(async ({ email }) => {
  //   try {
  //     await api.post(`/api/recover`, { email });
  //   } catch {
  //     Toast.show({
  //       type: 'error',
  //       position: 'bottom',
  //       text1: 'Erro',
  //       text2: 'Não foi possível gerar token de recuperação.',
  //     });
  //   }
  // }, []);

  // const updateUserData = useCallback(async id => {
  //   try {
  //     const response = await api.put(`/users/${id}`);
  //     setUser(response.data);
  //     await AsyncStorage.setItem(
  //       '@Mindeducation:user',
  //       JSON.stringify(response.data),
  //     );
  //   } catch (err) {
  //     console.log(err);
  //     Toast.show({
  //       type: 'error',
  //       position: 'bottom',
  //       text1: 'Erro',
  //       text2: 'Não foi atualizar alguma informação, tente relogar no app.',
  //     });
  //   }
  // }, []);

  return (
    <AuthContext.Provider value={{ user, loading, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
