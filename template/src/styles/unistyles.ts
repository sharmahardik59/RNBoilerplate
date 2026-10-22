import { UnistylesRegistry } from "react-native-unistyles";
import breakpoints from "./breakpoints";
import { darkTheme, lightTheme } from "./themes";

type AppBreakpoints = typeof breakpoints;
type AppThemes = {
  dark: typeof darkTheme;
  light: typeof lightTheme;
};

declare module "react-native-unistyles" {
  /* eslint-disable @typescript-eslint/no-empty-object-type -- official unistyles v2 module augmentation pattern */
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
  /* eslint-enable @typescript-eslint/no-empty-object-type */
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    dark: darkTheme,
    light: lightTheme,
  })
  .addConfig({
    adaptiveThemes: true,
  });
