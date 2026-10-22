import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import React from "react";
import type { PropsWithChildren } from "react";
import type { ViewStyle } from "react-native";
import { Image, Pressable, View } from "react-native";
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
    height: moderateScale(60),
    justifyContent: "space-between",
  },
  profileImage: {
    borderRadius: moderateScale(25),
    height: moderateScale(50),
    width: moderateScale(50),
  },
  titleStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: scale(24),
    lineHeight: scale(27),
  },
}));

type SectionProps = PropsWithChildren<{
  onPress?: () => void;
  style?: ViewStyle;
  title?: string;
}>;

const HeaderComp = ({ onPress, style, title }: SectionProps): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  return (
    <View key="header" style={{ ...styles.headerStyle, ...style }}>
      <Image
        key="profileImage"
        source={{
          uri: "https://m.media-amazon.com/images/I/31Cd9UQp6eL._AC_UF1000,1000_QL80_.jpg",
        }}
        style={styles.profileImage}
      />
      <TextContainer key="title" style={styles.titleStyle} text={`${title}`} />
      <Pressable key="setting" onPress={onPress}>
        <ImageContainer source={imagePath.icSetting} />
      </Pressable>
    </View>
  );
};

export default React.memo(HeaderComp);
