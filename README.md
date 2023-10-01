# Capacitor-NodeJS Example App

This app was created using [`@capacitor/create-app`](https://github.com/ionic-team/create-capacitor-app),
and comes with a very minimal shell for building an app. The example features the [Capacitor-NodeJS](https://github.com/hampoelz/Capacitor-NodeJS)
plugin running on the Android and Electron platforms. _(IOS is coming soon)_

### Running this example

To run the given example, you need to install all dependencies with `npm install` and build the web application using
`npm run build`. Finally, you can sync the web application into the native project and open it.

```bash
npm install
npm run build
npx cap sync

npx cap sync android
npx cap open android

npx cap sync @capacitor-community/electron
npx cap open @capacitor-community/electron
```

### Build the native project

You can use the example npm scripts `build:android` and `build:electron` to build the project for the corresponding platform.

```bash
npm run build:android
npm run build:electron
```
