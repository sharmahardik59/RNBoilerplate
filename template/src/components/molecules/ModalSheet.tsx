import {ImageContainer, TextContainer} from '@components/atoms';
import fontFamily from '@constants/fontFamily';
import imagePath from '@constants/imagePath';
import {useDispatch, useSelector} from '@redux/hooks';
import types from '@redux/types';
import changeLanguage from '@utils/i18nHelpers';
import {moderateScale, verticalScale} from '@utils/scaling';
import changeTheme from '@utils/themeHelpers';
import type {ReactNode} from 'react';
import React, { forwardRef, useImperativeHandle, useState} from 'react';
import type { ModalProps} from 'react-native';
import {Modal, Pressable, Switch, View} from 'react-native';
import {createStyleSheet, UnistylesRuntime, useStyles} from 'react-native-unistyles';
import {storage} from 'src/services/apiService';

const stylesheet = createStyleSheet(theme => ({
  container: {
    backgroundColor: theme.colors.background,
    borderTopLeftRadius: moderateScale(24),
    borderTopRightRadius: moderateScale(24),
    elevation: 5,
    marginTop: 'auto',
    minHeight: '25%',
    paddingHorizontal: moderateScale(16),
    paddingVertical: moderateScale(8),
    shadowColor: theme.colors.background,
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalLine: {
    alignSelf: 'center',
    backgroundColor: theme.colors.opacity50,
    borderRadius: moderateScale(8),
    height: moderateScale(6),
    width: moderateScale(80),
  },
  logoutText: {
    color: theme.colors.danger,
    fontFamily: fontFamily.semiBold,
  },
  modalView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: verticalScale(8),
  },
  textStyle: (isSelected: boolean) => ({
    color: isSelected ? theme.colors.danger : theme.colors.typography,
    fontFamily: isSelected ? fontFamily.semiBold : fontFamily.regular,
  }),
}));

interface ModalSheetProps extends ModalProps {
  children?: ReactNode;
}

export interface ModalSheetRef {
  toggleSheet: () => void;
}

const ModalSheet = forwardRef<ModalSheetRef, ModalSheetProps>((props, ref) => {
  const [isVisible, setVisible] = useState(false);
  const {defaultLanguage, languages} = useSelector(state => state.settings);

  const isDarkMode = UnistylesRuntime.themeName === 'dark';
  const dispatch = useDispatch();
  const {styles} = useStyles(stylesheet);

  useImperativeHandle(ref, () => ({
    toggleSheet: () => {
      setVisible(!isVisible);
    },
  }));

  const onPressLogout = () => {
    setVisible(!isVisible);
    setTimeout(() => {
      // need time to close modal
      storage.clearAll();
      dispatch({type: types.CLEAR_REDUX_STATE});
    }, 800);
  };

  return (
    <Modal animationType="slide" transparent visible={isVisible} {...props}>
      <View style={styles.container}>
        <View style={styles.headerView}>
          <View />
          <View style={styles.horizontalLine} />
          <Pressable onPress={() => setVisible(!isVisible)}>
            <ImageContainer source={imagePath.icClose} />
          </Pressable>
        </View>
        <>
          <View style={styles.modalView}>
            <View>
              <TextContainer
                style={{
                  fontFamily: fontFamily.semiBold,
                }}
                text="CHANGE_LANGUAGE"
              />
              {languages.map(val => (
                <Pressable
                  key={String(val.sortName)}
                  onPress={() => changeLanguage(val)}
                  style={{
                    marginTop: verticalScale(8),
                  }}>
                  <TextContainer
                    isDynamicText
                    style={styles.textStyle(defaultLanguage.sortName === val.sortName)}
                    text={val.name}
                  />
                </Pressable>
              ))}
            </View>
            <View>
              <TextContainer style={{fontFamily: fontFamily.semiBold}} text="CHANGE_THEME" />
              <Switch
                onChange={() => changeTheme(isDarkMode ? 'light' : 'dark')}
                style={{
                  alignSelf: 'flex-end',
                  marginVertical: verticalScale(8),
                }}
                value={isDarkMode}
              />
            </View>
          </View>
          <Pressable style={{alignSelf: 'center', marginVertical: verticalScale(16)}}>
            <TextContainer onPress={onPressLogout} style={styles.logoutText} text="LOGOUT" />
          </Pressable>
        </>
      </View>
    </Modal>
  );
});

export default React.memo(ModalSheet);
