# Installation Development Environment

* nvm (Node Version Manager)

  ```bash
  ➜  ~ nvm version
  v14.15.5
  ```

* node.js

  ```bash
  ➜  ~ node -v
  v14.15.5
  ```

* npm (Node Package Manager)

  ```bash
  ➜  ~ npm -v
  6.14.11
  ➜  ~ npm version
  {
    npm: '6.14.11',
    ares: '1.16.1',
    brotli: '1.0.9',
    cldr: '37.0',
    icu: '67.1',
    llhttp: '2.1.3',
    modules: '83',
    napi: '7',
    nghttp2: '1.41.0',
    node: '14.15.5',
    openssl: '1.1.1i',
    tz: '2020a',
    unicode: '13.0',
    uv: '1.40.0',
    v8: '8.4.371.19-node.18',
    zlib: '1.2.11'
  }
  ```

* Android Studio

* Java

  ```bash
  ➜  ~ java --version
  java 11.0.10 2021-01-19 LTS
  Java(TM) SE Runtime Environment 18.9 (build 11.0.10+8-LTS-162)
  Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.10+8-LTS-162, mixed mode)
  ```

* XCode

  ```bash
  12.4
  ```

* Visual Studio Code

* CocoaPod

  ```bash
  sudo gem install cocoapods -v 1.10.1
  ➜  ~ sudo gem list | grep cocoapods
  cocoapods (1.10.1)
  cocoapods-core (1.10.1)
  cocoapods-deintegrate (1.0.4)
  cocoapods-downloader (1.4.0)
  cocoapods-plugins (1.0.0)
  cocoapods-search (1.0.0)
  cocoapods-trunk (1.5.0)
  cocoapods-try (1.2.0)
  ```

* React Native CLI

  ```bash
  ➜  ~ react-native --version
  react-native-cli: 2.0.1
  react-native: n/a - not inside a React Native project directory
  ```

# Initialize App

react-native init <project name>

```bash
➜  20210213_inflearn react-native init application
This will walk you through creating a new React Native project in /Users/minah.kim/Desktop/development/react_native/20210213_inflearn/application
Installing react-native...
Consider installing yarn to make this faster: https://yarnpkg.com
npm WARN deprecated urix@0.1.0: Please see https://github.com/lydell/urix#deprecated
npm WARN deprecated resolve-url@0.2.1: https://github.com/lydell/resolve-url#deprecated
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN react-native@0.64.0 requires a peer of react@17.0.1 but none is installed. You must install peer dependencies yourself.
npm WARN use-subscription@1.5.1 requires a peer of react@^16.8.0 || ^17.0.0 but none is installed. You must install peer dependencies yourself.
npm WARN jscodeshift@0.11.0 requires a peer of @babel/preset-env@^7.1.6 but none is installed. You must install peer dependencies yourself.

+ react-native@0.64.0
added 625 packages from 362 contributors and audited 625 packages in 45.533s

17 packages are looking for funding
  run `npm fund` for details

found 2 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
info Setting up new React Native app in /Users/minah.kim/Desktop/development/react_native/20210213_inflearn/application
(node:96263) Warning: Accessing non-existent property 'padLevels' of module exports inside circular dependency
(Use `node --trace-warnings ...` to show where the warning was created)
info Adding required dependencies
npm WARN jscodeshift@0.11.0 requires a peer of @babel/preset-env@^7.1.6 but none is installed. You must install peer dependencies yourself.

+ react@17.0.1
added 1 package and audited 629 packages in 5.91s

17 packages are looking for funding
  run `npm fund` for details

found 2 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
info Adding required dev dependencies
npm WARN deprecated request-promise-native@1.0.9: request-promise-native has been deprecated because it extends the now deprecated request package, see https://github.com/request/request/issues/3142
npm WARN deprecated request@2.88.2: request has been deprecated, see https://github.com/request/request/issues/3142
npm WARN deprecated har-validator@5.1.5: this library is no longer supported
npm WARN jscodeshift@0.11.0 requires a peer of @babel/preset-env@^7.1.6 but none is installed. You must install peer dependencies yourself.
npm WARN tsutils@3.21.0 requires a peer of typescript@>=2.8.0 || >= 3.2.0-dev || >= 3.3.0-dev || >= 3.4.0-dev || >= 3.5.0-dev || >= 3.6.0-dev || >= 3.6.0-beta || >= 3.7.0-dev || >= 3.7.0-beta but none is installed. You must install peer dependencies yourself.

+ @babel/runtime@7.13.10
+ @babel/core@7.13.10
+ jest@26.6.3
+ metro-react-native-babel-preset@0.64.0
+ babel-jest@26.6.3
+ @react-native-community/eslint-config@2.0.0
+ react-test-renderer@17.0.1
+ eslint@7.14.0
added 361 packages from 237 contributors, updated 3 packages and audited 990 packages in 27.579s

67 packages are looking for funding
  run `npm fund` for details

found 2 low severity vulnerabilities
  run `npm audit fix` to fix them, or `npm audit` for details
info Installing required CocoaPods dependencies


  Run instructions for Android:
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • cd "/Users/minah.kim/Desktop/development/react_native/20210213_inflearn/application" && npx react-native run-android

  Run instructions for iOS:
    • cd "/Users/minah.kim/Desktop/development/react_native/20210213_inflearn/application" && npx react-native run-ios
    - or -
    • Open application/ios/application.xcworkspace in Xcode or run "xed -b ios"
    • Hit the Run button

  Run instructions for macOS:
    • See https://aka.ms/ReactNativeGuideMacOS for the latest up-to-date instructions.


➜  20210213_inflearn npm audit fix
npm ERR! code EAUDITNOPJSON
npm ERR! audit No package.json found: Cannot audit a project without a package.json

npm ERR! A complete log of this run can be found in:
npm ERR!     /Users/minah.kim/.npm/_logs/2021-03-23T17_30_38_727Z-debug.log
```

# Run iOS Simulator

```bash
npm start
react-native run-ios
```

