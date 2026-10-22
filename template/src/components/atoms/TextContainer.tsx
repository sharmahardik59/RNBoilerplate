import fontFamily from "@constants/fontFamily";
import { scale } from "@utils/scaling";
import React from "react";
import { useTranslation } from "react-i18next";
import type { TextProps } from "react-native";
import { Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  sectionTitle: {
    color: theme.colors.typography,
    fontFamily: fontFamily.regular,
    fontSize: scale(14),
  },
}));

interface TextContainterProps extends TextProps {
  isDynamicText?: boolean;
  style?: object;
  text: "" | string;
}

const TextContainer: React.FC<TextContainterProps> = ({
  isDynamicText = false,
  style,
  text,
  ...rest
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles(stylesheet);
  return (
    <Text style={[styles.sectionTitle, style]} {...rest}>
      {isDynamicText ? text : t(text)}
    </Text>
  );
};

export default React.memo(TextContainer);
