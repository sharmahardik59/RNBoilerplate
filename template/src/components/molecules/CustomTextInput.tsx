import {TextContainer} from '@components/atoms';
import fontFamily from '@constants/fontFamily';
import {moderateScale, scale, verticalScale} from '@utils/scaling';
import React, {forwardRef, Ref, useState} from 'react';
import {useTranslation} from 'react-i18next';
import type {ImageSourcePropType, TextInputInstance,TextInputProps} from 'react-native';
import { Pressable, TextInput, View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import ImageContainer from '../atoms/ImageContainer';

const stylesheet = createStyleSheet(theme => ({
  errorText: {
    color: theme.colors.danger,
    fontFamily: fontFamily.medium,
    fontSize: scale(12),
    marginLeft: scale(2),
    marginTop: verticalScale(5),
  },
  input: {
    alignItems: 'center',
    backgroundColor: theme.colors.textInputColor,
    borderColor: 'rgba(217, 217, 217,1)',
    borderRadius: moderateScale(10),
    borderWidth: moderateScale(0.5),
    flexDirection: 'row',
    height: moderateScale(52),
    paddingHorizontal: moderateScale(12),
  },
  labelStyle: {
    fontFamily: fontFamily.medium,
    fontSize: scale(14),
    marginBottom: moderateScale(8),
  },
  textInputStyle: {
    color: theme.colors.typography,
    flex: 1,
    fontFamily: fontFamily.medium,
    fontSize: scale(12),
    height: moderateScale(52),
    marginHorizontal: moderateScale(8),
  },
}));

interface CustomTextInputProps extends TextInputProps {
  error?: null | string;
  label: string;
  leftImage?: ImageSourcePropType | null;
  onChangeText: (text: string) => void;
  onPressRight?: () => void;
  placeholder: string;
  rightImage?: ImageSourcePropType | null;
  style?: object;
}

const CustomTextInput = forwardRef<TextInputInstance, CustomTextInputProps>(
  (
    {error, label, leftImage, onChangeText, onPressRight, placeholder, rightImage, style, ...rest},
    ref,
  ) => {
    const [text, setText] = useState('');
    const {styles, theme} = useStyles(stylesheet);
    const {t} = useTranslation();

    const handleTextChange = (inputText: string) => {
      setText(inputText);
      if (onChangeText) {
        onChangeText(inputText);
      }
    };

    return (
      <View style={style}>
        {label ? <TextContainer style={styles.labelStyle} text={label} /> : null}
        <View style={styles.input}>
          {leftImage ? (
            <ImageContainer
              resizeMode="contain"
              source={leftImage}
              style={{height: moderateScale(16), width: moderateScale(16)}}
            />
          ) : null}
          <TextInput
            onChangeText={handleTextChange}
            placeholder={t(`${placeholder}`)}
            placeholderTextColor={theme.colors.placeholder}
            ref={ref}
            style={styles.textInputStyle}
            value={text}
            {...rest}
          />
          {rightImage ? (
            <Pressable onPress={onPressRight}>
              <ImageContainer source={rightImage} />
            </Pressable>
          ) : null}
        </View>
        {error && <TextContainer style={styles.errorText} text={error} />}
      </View>
    );
  },
);
export default React.memo(CustomTextInput);
