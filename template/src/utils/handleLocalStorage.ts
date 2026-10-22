import storageKeys from "@constants/storageKeys";
import { saveUserData } from "@redux/reducers/auth";
import { saveDefaultLanguage, saveDefaultTheme } from "@redux/reducers/settings";
import type { LanguageInterface, ThemeInterface } from "@redux/reducers/settings";
import store from "@redux/store";
import i18n from "i18next";
import { UnistylesRuntime } from "react-native-unistyles";
import { getItem } from "src/services/apiService";

const { dispatch } = store;
const checkLocalStorage = () => {
  // get user Data
  const userData = getItem(storageKeys.USER_DATA);
  if (userData) {
    dispatch(saveUserData(userData));
  }
  // get default theme
  const defaultTheme = getItem<ThemeInterface>(storageKeys.DEFAULT_THEME);
  if (defaultTheme) {
    UnistylesRuntime.setTheme(defaultTheme.myTheme);
    dispatch(saveDefaultTheme(defaultTheme));
  }
  // get default language
  const defaultLanguage = getItem<LanguageInterface>(storageKeys.DEFAULT_LANGUAGE);
  if (defaultLanguage) {
    i18n.changeLanguage(defaultLanguage.sortName);
    dispatch(saveDefaultLanguage(defaultLanguage));
  }
};

export default checkLocalStorage;
