import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale } from "@utils/scaling";
import type { PropsWithChildren } from "react";
import React from "react";
import type { TextStyle, ViewStyle } from "react-native";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    borderColor: theme.colors.opacity50,
    borderRadius: moderateScale(36),
    borderWidth: moderateScale(1.2),
    flexDirection: "row",
    height: moderateScale(56),
    paddingHorizontal: moderateScale(12),
  },
  titleStyle: {
    color: theme.colors.opacity50,
    fontFamily: fontFamily.regular,
    fontSize: scale(14),
    marginLeft: moderateScale(16),
  },
}));

type SectionProps = PropsWithChildren<{
  style?: ViewStyle;
  textStyle?: TextStyle;
  title: string;
}>;

const SearchBar = ({ style, textStyle, title }: SectionProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.container, style]}>
      <ImageContainer source={imagePath.icSearch} />
      <TextContainer style={[styles.titleStyle, textStyle]} text={title} />
    </View>
  );
};

export default React.memo(SearchBar);
