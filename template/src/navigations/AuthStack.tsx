import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import * as Screens from '../screens';

export type AuthStackParamList = {
  Login: undefined;
  Onboarding: undefined;
  Signup: undefined;
};

export const Stack = createNativeStackNavigator<AuthStackParamList>();
const AuthStack = () => (
  <>
    <Stack.Screen component={Screens.Onboarding} name="Onboarding" />
    <Stack.Screen component={Screens.Login} name="Login" />
    <Stack.Screen component={Screens.Signup} name="Signup" />
  </>
);

export default AuthStack;
