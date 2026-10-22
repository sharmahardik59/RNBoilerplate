import RoundImageBorder from "@components/atoms/RoundImageBorder";
import imagePath from "@constants/imagePath";
import { useNavigation } from "@react-navigation/native";
import { moderateScale } from "@utils/scaling";
import type { PropsWithChildren } from "react";
import React from "react";
import type { ImageSourcePropType} from "react-native";
import { Pressable, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  headerStyle: {
    alignItems: "center",
    flexDirection: "row",
    height: moderateScale(60),
    justifyContent: "space-between",
  },
}));

type SectionProps = PropsWithChildren<{
  leftImage?: ImageSourcePropType;
  onPressLeft?: () => void;
  onPressRight?: () => void;
  rightImage?: ImageSourcePropType;
  style?: object;
}>;

const HeaderComp = ({
  leftImage = imagePath.icBack,
  onPressLeft,
  onPressRight,
  rightImage = imagePath.icShare,
  style,
}: SectionProps): React.JSX.Element => {
  const navigation = useNavigation();

  const { styles } = useStyles(stylesheet);

  return (
    <View style={{ ...styles.headerStyle, ...style }}>
      <Pressable onPress={onPressLeft || (() => navigation.goBack())}>
        <RoundImageBorder source={leftImage} />
      </Pressable>
      <Pressable onPress={onPressRight}>
        <RoundImageBorder source={rightImage} />
      </Pressable>
    </View>
  );
};

export default React.memo(HeaderComp);
