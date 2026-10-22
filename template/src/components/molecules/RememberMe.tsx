import { ImageContainer, TextContainer } from "@components/atoms";
import fontFamily from "@constants/fontFamily";
import imagePath from "@constants/imagePath";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import React, { useState } from "react";
import type { PropsWithChildren } from "react";
import { Pressable, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: verticalScale(24),
  },

  headerStyle: {
    alignItems: "center",
    flexDirection: "row",
    marginBottom: verticalScale(32),
  },
  textStyle: {
    fontFamily: fontFamily.medium,
    fontSize: scale(12),
    opacity: 0.6,
  },
}));

type SectionProps = PropsWithChildren<{
  onPressForgot: () => void;
}>;

const RememberMe = ({ onPressForgot }: SectionProps): React.JSX.Element => {
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const { styles } = useStyles(stylesheet);
  return (
    <View style={styles.flexRow}>
      <Pressable
        onPress={() => setRememberMe(!rememberMe)}
        style={{ alignItems: "center", flexDirection: "row" }}
      >
        <ImageContainer
          resizeMode="contain"
          source={rememberMe ? imagePath.icCheck : imagePath.icUnchek}
          style={{
            height: moderateScale(14),
            marginRight: moderateScale(12),
            width: moderateScale(14),
          }}
        />
        <TextContainer style={styles.textStyle} text="REMEBER_ME" />
      </Pressable>
      <TextContainer onPress={onPressForgot} style={styles.textStyle} text="FORGOT_PASSWORD" />
    </View>
  );
};
export default React.memo(RememberMe);
