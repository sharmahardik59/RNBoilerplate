import fontFamily from "@constants/fontFamily";
import {
  height,
  moderateScale,
  scale,
  verticalScale,
  width
} from "@utils/scaling";
import { createStyleSheet } from "react-native-unistyles";

const stylesheet = createStyleSheet((theme) => ({
  btnStyle: {
    backgroundColor: theme.colors.white,
    borderRadius: moderateScale(10),
    height: moderateScale(34),
    minWidth: moderateScale(96)
  },
  btnTextStyle: {
    color: theme.colors.black,
    fontFamily: fontFamily.medium,
    fontSize: scale(14)
  },
  commentBtn: {
    borderRadius: moderateScale(10),
    height: moderateScale(34),
    minWidth: moderateScale(96)
  },
  containerView: {
    borderTopLeftRadius: moderateScale(34),
    borderTopRightRadius: moderateScale(34),
    marginTop: verticalScale(-26),
    paddingHorizontal: moderateScale(16)
  },
  descTextStyle: {
    color: theme.colors.opacity50,
    fontSize: scale(14)
  },
  flexView: {
    alignItems: "center",
    flex: 0.3,
    flexDirection: "row"
  },
  followUs: {
    color: theme.colors.white,
    fontFamily: fontFamily.semiBold,
    fontSize: scale(18)
  },
  headerLine: {
    alignSelf: "center",
    borderRadius: moderateScale(12),
    height: moderateScale(2),
    marginVertical: verticalScale(14),
    width: moderateScale(42)
  },

  headerTextStyle: {
    fontFamily: fontFamily.semiBold,
    fontSize: scale(20)
  },
  imageStyle: {
    justifyContent: "space-between",
    minHeight: height / 2.5,
    paddingBottom: verticalScale(40),
    paddingHorizontal: moderateScale(28),
    width
  },
  likeCommentView: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: verticalScale(14)
  },
  rectangleBox: {
    backgroundColor: "#B3C680",
    borderRadius: moderateScale(18),
    flexDirection: "row",
    minHeight: moderateScale(85),
    paddingHorizontal: moderateScale(30),
    paddingVertical: verticalScale(18)
  }
}));
export default stylesheet;
