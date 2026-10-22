import { moderateScale } from "@utils/scaling";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet(() => ({
  bottomView: {
    alignItems: 'center',
    alignSelf: 'center',
    flexDirection: 'row',
  },
  container: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: moderateScale(16),
  },
}));

export default stylesheet;