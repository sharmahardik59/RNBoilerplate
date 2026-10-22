import React from "react";
import type { ImageProps} from "react-native";
import { Image as RNImage } from "react-native";
import { useStyles } from "react-native-unistyles";

const ImageContainer: React.FC<ImageProps> = ({ ...rest }) => {
  const { theme } = useStyles();
  return <RNImage tintColor={theme.colors.typography} {...rest} />;
};
export default ImageContainer;
