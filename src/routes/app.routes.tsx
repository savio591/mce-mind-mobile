import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Dashboard } from '../pages/Dashboard';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="SignIn" component={Dashboard} key="signin" />
    </Navigator>
  );
}
