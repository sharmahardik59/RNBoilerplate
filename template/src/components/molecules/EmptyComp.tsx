 

import React from "react";
import { ActivityIndicator, View } from "react-native";
import ErrorComp from "./ErrorComp";

type EmptyCompType = {
  isError: boolean;
  isLoading: boolean;
};
const EmptyComp: React.FC<EmptyCompType> = ({ isError, isLoading }): React.JSX.Element => {
  const emptyComponent = isLoading ? <ActivityIndicator /> : isError ? <ErrorComp /> : <View />;
  return emptyComponent;
};

export default EmptyComp;
