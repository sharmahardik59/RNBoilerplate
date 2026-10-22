import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import type { PropsWithChildren } from "react";
import React from "react";
import type { ViewStyle } from "react-native";
import { View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  descStyle: {
    fontFamily: fontFamily.regular,
    fontSize: scale(14),
    lineHeight: scale(27),
    marginBottom: verticalScale(24),
    marginTop: verticalScale(8),
    opacity: 0.5,
  },
  headerStyle: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: verticalScale(32),
  },
  titleStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: scale(27),
  },
}));

type SectionProps = PropsWithChildren<{
  description: string;
  style?: ViewStyle;
  title: string;
}>;

const AuthHeader = ({ description, style = {}, title }: SectionProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  return (
    <>
      <View style={[styles.headerStyle, style]}>
        <ImageContainer source={imagePath.icStar} />
        <ImageContainer
          resizeMode="cover"
          source={imagePath.icLine}
          style={{ marginLeft: moderateScale(16), width: "100%" }}
        />
      </View>
      <TextContainer style={styles.titleStyle} text={title} />
      <TextContainer style={styles.descStyle} text={description} />
    </>
  );
};

export default React.memo(AuthHeader);
