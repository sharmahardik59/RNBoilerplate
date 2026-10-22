import { moderateScale, verticalScale } from "@utils/scaling";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    justifyContent: "space-between",
    marginVertical: verticalScale(16),
  },
  dotStyle: (isSelected: boolean) => ({
    backgroundColor: isSelected ? theme.colors.darkwhite : theme.colors.grey,
    borderRadius: moderateScale(4),
    height: moderateScale(6),
    marginRight: moderateScale(8),
    width: moderateScale(6),
  }),
  flexView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: moderateScale(16),
  },
}));

export default stylesheet;
