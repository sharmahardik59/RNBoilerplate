import {TextContainer} from '@components/atoms';
import {moderateScale} from '@utils/scaling';
import React from 'react';
import type { PressableProps, ViewStyle} from 'react-native';
import {ActivityIndicator, Pressable} from 'react-native';
import {createStyleSheet, UnistylesRuntime, useStyles} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  btnStyle: (isDarkMode: boolean) => ({
    alignItems: 'center',
    backgroundColor: isDarkMode ? theme.colors.white : theme.colors.black,
    borderRadius: moderateScale(8),
    height: moderateScale(52),
    justifyContent: 'center',
  }),
}));

interface CustomButtonProps extends PressableProps {
  isLoading?: boolean;
  label: string;
  style?: ViewStyle;
  textStyle?: object;
}

const ButtonContainer: React.FC<CustomButtonProps> = ({
  isLoading,
  label,
  style,
  textStyle,
  ...props
}) => {
  const {styles, theme} = useStyles(stylesheet);
  const isDarkMode = UnistylesRuntime.themeName === 'dark';

  return (
    <Pressable style={[styles.btnStyle(isDarkMode), style]} {...props}>
      {isLoading ? (
        <ActivityIndicator color={isDarkMode ? theme.colors.black : theme.colors.white} />
      ) : (
        <TextContainer
          style={{
            color: isDarkMode ? theme.colors.black : theme.colors.white,
            ...textStyle,
          }}
          text={label}
        />
      )}
    </Pressable>
  );
};

export default React.memo(ButtonContainer);
