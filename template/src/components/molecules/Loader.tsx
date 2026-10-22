import { WrapperContainer } from "@components/atoms";
import React from "react";
import { ActivityIndicator, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
}));

const Loader = (): React.JSX.Element => {
  const { styles } = useStyles(stylesheet);
  return (
    <WrapperContainer isSafeAreaView={false}>
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    </WrapperContainer>
  );
};

export default React.memo(Loader);
