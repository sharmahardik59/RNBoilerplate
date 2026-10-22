/* eslint-disable @typescript-eslint/no-require-imports -- require() is needed inside jest.mock factories */
import 'react-native-gesture-handler/jestSetup';

// react-native-worklets must be mocked before react-native-reanimated is loaded.
// (jest.mock calls are hoisted to the top of this file by babel-plugin-jest-hoist)
jest.mock('react-native-worklets', () => require('react-native-worklets/src/mock'));

// react-native-reanimated runs on its in-memory mock in tests
jest.mock('react-native-reanimated', () => require('react-native-reanimated/mock'));

// Mock MMKV storage with an in-memory implementation
jest.mock('react-native-mmkv', () => {
  const {createMockMMKV} = require('react-native-mmkv/lib/commonjs/createMMKV.mock');

  return {
    MMKV: jest.fn(() => createMockMMKV()),
  };
});

jest.mock('react-native/Libraries/EventEmitter/NativeEventEmitter', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation(() => ({
    addListener: jest.fn(() => ({remove: jest.fn()})),
    removeAllListeners: jest.fn(),
    removeSubscription: jest.fn(),
  })),
}));

// Register unistyles breakpoints/themes for component tests
import './src/styles/unistyles';
