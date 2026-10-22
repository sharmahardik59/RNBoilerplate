/* eslint-disable no-console */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { UnistylesThemes } from "react-native-unistyles";

export interface LanguageInterface {
  name: string;
  sortName: string;
}

export interface ThemeInterface {
  myTheme: keyof UnistylesThemes;
}

export interface SettingsState {
  defaultLanguage: LanguageInterface;
  defaultTheme: ThemeInterface;
  languages: Array<LanguageInterface>;
}

const supportedLanguages: Array<LanguageInterface> = [
  { name: "English", sortName: "en" },
  { name: "Arabic", sortName: "ar" },
  { name: "French", sortName: "fr" },
];

const initialState: SettingsState = {
  defaultLanguage: supportedLanguages[0],
  defaultTheme: { myTheme: "light" },
  languages: supportedLanguages,
};

const settingSlice = createSlice({
  initialState,
  name: "settings",
  reducers: {
    saveDefaultLanguage: (state, action: PayloadAction<LanguageInterface>) => {
      const languageExists = state.languages.some(
        (lang) => lang.sortName === action.payload.sortName,
      );
      if (languageExists) {
        state.defaultLanguage = action.payload;
      } else {
        console.error("Language not found in the list.");
      }
    },
    saveDefaultTheme: (state, action: PayloadAction<ThemeInterface>) => {
      state.defaultTheme = action.payload;
    },
  },
});

export const { saveDefaultLanguage, saveDefaultTheme } = settingSlice.actions;

export default settingSlice.reducer;
