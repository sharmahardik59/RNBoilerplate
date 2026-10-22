import {TextContainer} from '@components/atoms';
import fontFamily from '@constants/fontFamily';
import {moderateScale, scale, verticalScale} from '@utils/scaling';
import React, {memo} from 'react';
import {View} from 'react-native';
import {createStyleSheet, useStyles} from 'react-native-unistyles';
import SearchBar from './SearchBar';

const stylesheet = createStyleSheet(theme => ({
  flexRow: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(15),
    marginHorizontal: moderateScale(20),
  },
  recommendTextStyle: {
    fontFamily: fontFamily.medium,
    fontSize: scale(18),
  },
  searchBarStyle: {
    marginBottom: verticalScale(20),
    marginHorizontal: moderateScale(16),
    marginTop: verticalScale(28),
  },
  textStyle: {
    color: theme.colors.typography,
  },
}));

const HomeListHeader: React.FC = memo(() => {
  const {styles} = useStyles(stylesheet);
  return (
    <>
      <SearchBar
        style={styles.searchBarStyle}
        textStyle={styles.textStyle}
        title="FIND_INTERESTING_BLOG"
      />
      <View style={styles.flexRow}>
        <TextContainer style={styles.recommendTextStyle} text="RECOMMEND" />
        <TextContainer text="SEE_MORE" />
      </View>
    </>
  );
});

export default React.memo(HomeListHeader);
