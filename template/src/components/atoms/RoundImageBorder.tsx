import { moderateScale } from "@utils/scaling";
import React from "react";
import type { ImageProps} from "react-native";
import { Image as RNImage, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    backgroundColor: theme.colors.background,
    borderColor: "rgba(90,90,90,0.5)",
    borderRadius: moderateScale(25),
    borderWidth: 0.5,
    height: moderateScale(50),
    justifyContent: "center",
    width: moderateScale(50),
  },
}));

interface CustomImageProps extends ImageProps {
  imageStyle?: object;
  viewStyle?: object;
}

// Define the component
const RoundImageBorder: React.FC<CustomImageProps> = ({ imageStyle, viewStyle, ...props }) => {
  const { styles, theme } = useStyles(stylesheet);
  return (
    <View style={[styles.container, viewStyle]}>
      <RNImage tintColor={theme.colors.darkwhite} {...props} />
    </View>
  );
};

export default React.memo(RoundImageBorder);
