import {TextContainer} from '@components/atoms';
import fontFamily from '@constants/fontFamily';
import {moderateScale} from '@utils/scaling';
import React from 'react';
import type {GestureResponderEvent} from 'react-native';
import { View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  bottomView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  text: {
    fontFamily: fontFamily.semiBold,
    marginLeft: moderateScale(4),
  },
}));

const FooterView = ({
  linkPress,
  linkText,
  simpleText,
}: {
  linkPress: ((event: GestureResponderEvent) => void) | undefined;
  linkText: string;
  simpleText: string;
}): React.JSX.Element => {
  // Stylesheet declaration
  const {styles} = useStyles(stylesheet);

  return (
    <View style={styles.bottomView}>
      <TextContainer text={simpleText} />
      <TextContainer onPress={linkPress} style={styles.text} text={linkText} />
    </View>
  );
};

export default FooterView;
