# RNBoilerPlate: React Native App QuickStart

[![npm version](https://img.shields.io/npm/v/new-react-native-boilerplate.svg)](https://www.npmjs.com/package/new-react-native-boilerplate)
[![npm downloads](https://img.shields.io/npm/dm/new-react-native-boilerplate.svg)](https://www.npmjs.com/package/new-react-native-boilerplate)
[![license](https://img.shields.io/npm/l/new-react-native-boilerplate.svg)](https://github.com/sharmahardik59/RNBoilerplate/blob/main/LICENSE)
![React Native](https://img.shields.io/badge/React%20Native-0.88-61dafb)
![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6)

⚛️ A production-ready React Native boilerplate. One command creates a new app with navigation, state management, data fetching, theming and localization already set up, so you can start building features right away. 📱✨

---

## Table of Contents

- [Key Features](#key-features)
- [Requirements](#requirements)
- [Installation](#installation)
- [What the Setup Wizard Does](#what-the-setup-wizard-does)
- [Running the App](#running-the-app)
- [Environment Variables](#environment-variables)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Libraries Included](#libraries-included)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [Acknowledgements](#acknowledgements)
- [License](#license)

---

## Key Features

- 🌗 **Light / Dark mode**: theme switching built in, powered by `react-native-unistyles`.
- 🌍 **Localization**: i18n setup with English, French and Arabic translations.
- 🗃️ **Global state and storage**: Redux Toolkit with typed hooks, plus fast local storage with MMKV.
- 🔄 **API layer**: a preconfigured Axios service layer with status handling.
- 🔐 **Authentication stack**: Login, Signup and Onboarding screens with Formik and Yup validation.
- 🧭 **Main stack**: React Navigation (native stack) with separate Auth and Main flows.
- 🧱 **Atomic components**: reusable atoms and molecules such as inputs, headers, loaders and modal sheets.
- 🧪 **Testing and quality**: Jest, React Native Testing Library, ESLint, Prettier, Husky and Commitlint.
- 🏷️ **Custom name and bundle ID**: the wizard renames the project and sets your bundle ID automatically.

---

## Requirements

| Tool | Version | Notes |
| --- | --- | --- |
| [Node.js](https://nodejs.org/) | **>= 22.11** | LTS recommended |
| [Yarn](https://classic.yarnpkg.com/) | 1.22.x | The generated project uses Yarn |
| [Ruby](https://www.ruby-lang.org/) + [Bundler](https://bundler.io/) | Ruby 2.6.10 or later | Used to install CocoaPods |
| [Xcode](https://developer.apple.com/xcode/) | **16 or later** | iOS only (macOS); targets iOS 15.1+ |
| [CocoaPods](https://cocoapods.org/) | latest | iOS only, installed through Bundler |
| [Android Studio](https://developer.android.com/studio) | latest | Android SDK, emulator and JDK 17 |

> **Note:** Complete the official [React Native environment setup](https://reactnative.dev/docs/set-up-your-environment) for your OS and target platform before you continue.
>
> The setup wizard is a Bash script, so run it on **macOS** or **Linux**. On Windows, use **WSL**.

---

## Installation

Create a new project with one command:

```bash
npx new-react-native-boilerplate
```

The interactive wizard asks for two things:

1. **Project name**, for example `MyAwesomeApp`
2. **Bundle ID**, for example `com.mycompany.myawesomeapp` (defaults to `com.<projectname>`)

```text
? What would you like to name your new project? › MyAwesomeApp
? What is the bundle ID for your new project? › com.myawesomeapp
```

When it finishes, your project is ready and your terminal is already inside the new project folder.

---

## What the Setup Wizard Does

After you answer the two prompts, the wizard runs these steps automatically:

1. Creates a React Native project from this template with `@react-native-community/cli`.
2. Renames the app and sets your bundle ID on iOS and Android with `react-native-rename`.
3. Removes the template's helper files, such as `plugins/` and its setup scripts.
4. Creates a default `.env` file. See [Environment Variables](#environment-variables).
5. Installs JavaScript dependencies with `yarn`.
6. Links fonts and assets with `react-native-asset`.
7. Makes `android/gradlew` executable.
8. Installs Ruby gems with `bundle install` and iOS pods with `yarn podinstall`.

---

## Running the App

### 1. Start Metro

From the project root:

```bash
yarn start
```

To see app console logs in the Metro terminal, use this instead:

```bash
yarn start-logs
```

### 2. Run on a device or simulator

Keep Metro running and open a **new terminal** in the project root.

#### Android

```bash
yarn android
```

#### iOS

```bash
yarn ios
```

To run on a specific simulator:

```bash
yarn ios --simulator="iPhone 16 Pro"
```

> If you add or update native dependencies, reinstall pods before running iOS:
>
> ```bash
> yarn podinstall
> ```

### 3. Release builds (Android)

```bash
yarn android-bundle-release   # build a release bundle
yarn android-run-release      # run the release variant
```

---

## Environment Variables

Environment variables are loaded from `.env` at the project root through `react-native-dotenv`. The wizard creates this file for you with values that work with the demo login and auth flow:

```dotenv
ENV=DEV
BASE_API_URL=https://dummyjson.com
IMAGE_URL=https://dev-tn-file-server.s3.ap-south-1.amazonaws.com
```

| Variable | Description |
| --- | --- |
| `ENV` | Current environment (`DEV`, `STAGING`, `PROD`) |
| `BASE_API_URL` | Base URL for all API requests made through Axios |
| `IMAGE_URL` | Base URL for remote images |

> ⚠️ Never commit real secrets. Keep `.env` out of version control and share values securely.
>
> After you change `.env`, restart Metro with a clean cache by running `yarn start`.

---

## Available Scripts

| Script | Description |
| --- | --- |
| `yarn start` | Start Metro with a cleared cache |
| `yarn start-logs` | Start Metro and stream app console logs |
| `yarn android` | Build and run the Android app |
| `yarn ios` | Build and run the iOS app |
| `yarn podinstall` | Install iOS CocoaPods through Bundler |
| `yarn asset` | Link fonts and assets with `react-native-asset` |
| `yarn test` | Run the Jest test suite |
| `yarn test:report` | Run tests with coverage and a JUnit report |
| `yarn lint` | Lint `.ts` and `.tsx` files with ESLint |
| `yarn tsc` | Type-check the project |
| `yarn precommit` | Run the type check and lint in parallel |
| `yarn android-bundle-release` | Build an Android release bundle |
| `yarn android-run-release` | Run the Android release variant |

---

## Project Structure

```text
.
├── android/                 # Native Android project
├── ios/                     # Native iOS project
├── __tests__/               # Jest tests
├── src/
│   ├── App.tsx              # App entry: providers and navigation
│   ├── assets/              # Fonts and images
│   ├── components/
│   │   ├── atoms/           # Basic building blocks (Text, Button, Image…)
│   │   └── molecules/       # Composite components (Inputs, Headers, Loader…)
│   ├── constants/           # API endpoints, fonts, image paths, storage keys
│   ├── models/              # TypeScript models for API data
│   ├── navigations/         # Auth stack, Main stack and Routes
│   ├── redux/               # Store, reducers (slices) and typed hooks
│   ├── screens/             # Home, Login, Signup, Onboarding, PostDetails
│   ├── services/            # Axios API service, auth and product services
│   ├── styles/              # Themes, breakpoints and Unistyles config
│   ├── translations/        # en, fr, ar language files and i18n setup
│   ├── typings/             # Global and env type declarations
│   └── utils/               # Helpers: storage, scaling, validation, theme
├── .env                     # Environment variables (created by the wizard)
├── babel.config.js
├── metro.config.js
├── tsconfig.json
└── package.json
```

---

## Libraries Included

| Category | Libraries |
| --- | --- |
| **Navigation** | [@react-navigation/native](https://www.npmjs.com/package/@react-navigation/native), [@react-navigation/native-stack](https://www.npmjs.com/package/@react-navigation/native-stack), [react-native-screens](https://www.npmjs.com/package/react-native-screens), [react-native-safe-area-context](https://www.npmjs.com/package/react-native-safe-area-context), [react-native-gesture-handler](https://www.npmjs.com/package/react-native-gesture-handler) |
| **State and data** | [@reduxjs/toolkit](https://www.npmjs.com/package/@reduxjs/toolkit), [react-redux](https://www.npmjs.com/package/react-redux), [axios](https://www.npmjs.com/package/axios), [react-native-mmkv](https://www.npmjs.com/package/react-native-mmkv) |
| **Forms** | [formik](https://www.npmjs.com/package/formik), [yup](https://www.npmjs.com/package/yup) |
| **Localization** | [i18next](https://www.npmjs.com/package/i18next), [react-i18next](https://www.npmjs.com/package/react-i18next), [@os-team/i18next-react-native-language-detector](https://www.npmjs.com/package/@os-team/i18next-react-native-language-detector) |
| **UI and animation** | [react-native-unistyles](https://www.npmjs.com/package/react-native-unistyles), [react-native-reanimated](https://www.npmjs.com/package/react-native-reanimated), [react-native-keyboard-aware-scroll-view](https://www.npmjs.com/package/react-native-keyboard-aware-scroll-view) |
| **Utilities** | [react-native-restart](https://www.npmjs.com/package/react-native-restart), [react-native-dotenv](https://www.npmjs.com/package/react-native-dotenv) |
| **Testing and tooling** | [jest](https://www.npmjs.com/package/jest), [@testing-library/react-native](https://www.npmjs.com/package/@testing-library/react-native), [eslint](https://www.npmjs.com/package/eslint), [prettier](https://www.npmjs.com/package/prettier), [husky](https://www.npmjs.com/package/husky), [commitlint](https://www.npmjs.com/package/commitlint) |

---

## Troubleshooting

<details>
<summary><strong>iOS: <code>pod install</code> fails</strong></summary>

```bash
cd ios
bundle install
bundle exec pod install --repo-update
cd ..
```

</details>

<details>
<summary><strong>Android: <code>Permission denied</code> for gradlew</strong></summary>

```bash
chmod 755 android/gradlew
```

</details>

<details>
<summary><strong>Metro shows stale code or env values</strong></summary>

```bash
yarn start   # already runs with --reset-cache
```

If the problem continues, delete `node_modules` and reinstall:

```bash
rm -rf node_modules && yarn
```

</details>

<details>
<summary><strong>Fonts or images not showing</strong></summary>

```bash
yarn asset
```

Then rebuild the native app with `yarn android` or `yarn ios`.

</details>

---

## Contributing

Contributions, issues and feature requests are welcome.

1. Fork the [repository](https://github.com/sharmahardik59/RNBoilerplate).
2. Create a branch: `git checkout -b feature/my-feature`.
3. Commit your changes: `git commit -m "feat: add my feature"`.
4. Push the branch: `git push origin feature/my-feature`.
5. Open a Pull Request.

Found a bug? [Open an issue](https://github.com/sharmahardik59/RNBoilerplate/issues).

---

## Acknowledgements

This project was inspired by [theCodingMachine's React Native Boilerplate](https://github.com/thecodingmachine/react-native-boilerplate). Its architecture and design principles were adapted to fit this project's needs. Thanks to them for their contributions to the React Native community.

---

## License

[MIT](./LICENSE) © Hardik Sharma

If this boilerplate helps you, please ⭐ [star the repo](https://github.com/sharmahardik59/RNBoilerplate).
