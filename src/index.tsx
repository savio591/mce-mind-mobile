import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import Toast from 'react-native-toast-message';

import {
  useFonts,
  DMSans_400Regular,
  DMSans_500Medium,
  DMSans_700Bold,
} from '@expo-google-fonts/dm-sans';

import {
  WorkSans_400Regular,
  WorkSans_700Bold,
} from '@expo-google-fonts/work-sans';

import { AuthProvider } from './contexts/AuthContext';
import Routes from './routes';
// import { Main } from './navigation/Main';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSans_500Medium,
    DMSans_700Bold,
    WorkSans_400Regular,
    WorkSans_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <AuthProvider>
      <StatusBar style="auto" />
      <NavigationContainer>
        {/* <Main /> */}
        <Routes />
        <Toast ref={ref => Toast.setRef(ref)} />
      </NavigationContainer>
    </AuthProvider>
  );
}
