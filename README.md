# Mobile app

## Development mode

### Run mongodb

```bash
brew services start mongodb/brew/mongodb-community
```

### Run backend

```bash
cd backend
npm run dev
```

### Run mobile app

Expo Go cannot be used for local development and testing of OAuth or OpenID Connect-enabled apps due to the inability to customize your app scheme. See [https://auth0.com/docs/quickstart/native/react-native-expo](https://auth0.com/docs/quickstart/native/react-native-expo)

You must compile and build your app locally.

- Open iOS simulator (XCode > Open Developer Tool > Simulator).
- Open any iphone Simulator (eq. iphone SE (3rd generation) - iOS 17.4).
  To build your project locally you can use compile commands from Expo CLI which generates the android and ios directories:

```bash
cd mobile
# Build native Android project
npx expo run:android
# Build native iOS project
npx expo run:ios
```

## Usefull documentation

Architechture scenarios
[https://auth0.com/docs/get-started/architecture-scenarios/mobile-api](https://auth0.com/docs/get-started/architecture-scenarios/mobile-api)
