import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import * as Screens from "../screens";

export type HomeStackParamList = {
  Home: undefined;
  PostDetails: { productId: number };
  Settings: undefined;
};
const Stack = createNativeStackNavigator<HomeStackParamList>();

const MainStack = () => (
  <>
    <Stack.Screen component={Screens.Home} name="Home" />
    <Stack.Screen component={Screens.PostDetails} name="PostDetails" />
  </>
);

export default MainStack;
