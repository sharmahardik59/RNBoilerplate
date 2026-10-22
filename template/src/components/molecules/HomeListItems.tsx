 

import { TextContainer } from "@components/atoms";
import RemoteImage from "@components/atoms/RemoteImage";
import fontFamily from "@constants/fontFamily";
import type { ProductsData } from "@models/HomeData";
import type { HomeStackParamList } from "@navigations/MainStack";
import type { NavigationProp } from "@react-navigation/native";
import { moderateScale, scale, verticalScale } from "@utils/scaling";
import React, { memo } from "react";
import { Pressable, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: moderateScale(16),
  },
  flexRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  imageStyle: {
    borderRadius: moderateScale(10),
    height: moderateScale(20),
    marginRight: moderateScale(4),
    width: moderateScale(20),
  },
  profileImage: {
    backgroundColor: theme.colors.grey,
    borderRadius: moderateScale(24),
    height: moderateScale(134),
    marginRight: moderateScale(16),
    width: moderateScale(134),
  },
  textStyle: {
    color: theme.colors.opacity50,
    fontSize: scale(12),
  },
}));

interface HomeListItemsProps {
  item: ProductsData;
  navigation: NavigationProp<HomeStackParamList>;
}

const HomeListItems: React.FC<HomeListItemsProps> = memo(({ item, navigation }) => {
  const { styles } = useStyles(stylesheet);
  return (
    <Pressable
      onPress={() => navigation.navigate("PostDetails", { productId: item.id })}
      style={styles.container}
    >
      <RemoteImage source={{ uri: item.thumbnail }} style={styles.profileImage} />

      <View style={{ flex: 1 }}>
        <TextContainer isDynamicText style={{ fontSize: scale(12) }} text={item.title} />
        <TextContainer
          isDynamicText
          numberOfLines={2}
          style={{
            fontFamily: fontFamily.medium,
            marginVertical: verticalScale(6),
          }}
          text={item.description}
        />
        <View style={styles.flexRow}>
          <View style={{ alignItems: "center", flex: 1, flexDirection: "row" }}>
            <RemoteImage
              source={{
                uri: "https://www.profilebakery.com/wp-content/uploads/2023/03/AI-Profile-Picture.jpg",
              }}
              style={styles.imageStyle}
            />
            <TextContainer isDynamicText style={styles.textStyle} text="Regulators" />
          </View>
          <TextContainer isDynamicText style={styles.textStyle} text="June 14 2023" />
        </View>
      </View>
    </Pressable>
  );
});

export default HomeListItems;
