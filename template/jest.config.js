module.exports = {
  preset: '@react-native/jest-preset',
  setupFilesAfterEnv: ['./jest.setup.js'],
  transform: {
    '^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp)$': require.resolve(
      '@react-native/jest-preset/jest/assetFileTransformer.js',
    ),
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|@react-navigation|react-redux|@reduxjs/toolkit|immer|react-i18next|react-native-reanimated|react-native-worklets|react-native-unistyles|react-native-safe-area-context|react-native-screens|react-native-gesture-handler|react-native-keyboard-aware-scroll-view|react-native-iphone-x-helper|react-native-restart|react-native-localize)/)',
  ],
};
