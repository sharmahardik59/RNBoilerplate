This project was created with [**new-react-native-boilerplate**](https://www.npmjs.com/package/new-react-native-boilerplate), a [React Native](https://reactnative.dev) starter with navigation, Redux Toolkit, theming and localization already set up.

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before you continue.

# Getting Started

## Step 1: Install dependencies

The setup wizard already ran this for you. Run it again after you clone the project or change dependencies:

```sh
yarn
yarn asset          # link fonts and images
bundle install      # install CocoaPods through Bundler (first time only)
yarn podinstall     # install iOS pods (after native dependency changes)
```

## Step 2: Check the `.env` file

The wizard creates a `.env` file at the project root. Update the values for your API:

```dotenv
ENV=DEV
BASE_API_URL=https://dummyjson.com
IMAGE_URL=https://dev-tn-file-server.s3.ap-south-1.amazonaws.com
```

## Step 3: Start Metro

```sh
yarn start
```

To see app console logs in the Metro terminal, use this instead:

```sh
yarn start-logs
```

## Step 4: Build and run your app

Keep Metro running, open a new terminal in the project root, and run one of these:

### Android

```sh
yarn android
```

### iOS

```sh
yarn ios

# or on a specific simulator
yarn ios --simulator="iPhone 16 Pro"
```

If everything is set up correctly, your app opens in the Android Emulator, the iOS Simulator, or on your connected device. You can also build it directly from Android Studio or Xcode.

## Step 5: Modify your app

Open `src/App.tsx` or any screen in `src/screens/` and make a change. When you save, the app updates automatically through [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

To force a full reload, for example to reset the app's state:

- **Android**: press <kbd>R</kbd> twice, or choose **"Reload"** from the **Dev Menu**. Open it with <kbd>Ctrl</kbd> + <kbd>M</kbd> on Windows and Linux, or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> on macOS.
- **iOS**: press <kbd>R</kbd> in the iOS Simulator.

# Available Scripts

| Script | Description |
| --- | --- |
| `yarn start` | Start Metro with a cleared cache |
| `yarn start-logs` | Start Metro and stream app console logs |
| `yarn android` | Build and run the Android app |
| `yarn ios` | Build and run the iOS app |
| `yarn podinstall` | Install iOS CocoaPods through Bundler |
| `yarn asset` | Link fonts and assets |
| `yarn test` | Run the Jest test suite |
| `yarn test:report` | Run tests with coverage and a JUnit report |
| `yarn lint` | Lint `.ts` and `.tsx` files |
| `yarn tsc` | Type-check the project |
| `yarn precommit` | Run the type check and lint in parallel |
| `yarn android-bundle-release` | Build an Android release bundle |
| `yarn android-run-release` | Run the Android release variant |

# Troubleshooting

- **Pods fail to install:** run `cd ios && bundle exec pod install --repo-update && cd ..`
- **`gradlew: Permission denied`:** run `chmod 755 android/gradlew`
- **Stale code or `.env` values:** restart Metro with `yarn start`, which already clears the cache.
- **Fonts or images missing:** run `yarn asset`, then rebuild the app.

For anything else, see the React Native [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page or [open an issue](https://github.com/sharmahardik59/RNBoilerplate/issues).

# Learn More

- [new-react-native-boilerplate on GitHub](https://github.com/sharmahardik59/RNBoilerplate): source code, docs and issues.
- [React Native website](https://reactnative.dev): learn more about React Native.
- [Learn the Basics](https://reactnative.dev/docs/getting-started): a guided tour of React Native.
