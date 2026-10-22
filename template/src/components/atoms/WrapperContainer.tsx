import type { PropsWithChildren } from 'react';
import React from 'react';
import { StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
}));

type SectionProps = PropsWithChildren<{
  isSafeAreaView?: boolean;
  style?: object;
}>;

const WrapperContainer = ({
  children,
  isSafeAreaView = true,
  style,
}: SectionProps): React.JSX.Element => {
  const {styles} = useStyles(stylesheet);
  const {theme} = useStyles();

  if (isSafeAreaView) {
    return (
      <SafeAreaView style={[styles.container, style]}>
        <StatusBar barStyle={theme.colors.barStyle} />
        {children}
      </SafeAreaView>
    );
  }
  return (
    <View style={[styles.container, style]}>
      <StatusBar barStyle={theme.colors.barStyle} />
      {children}
    </View>
  );
};

export default React.memo(WrapperContainer);
