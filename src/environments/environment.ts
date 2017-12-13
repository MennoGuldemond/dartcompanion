// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDFTNitdKqzWe4p43xS9ibUhMkHVr2Oo-I",
    authDomain: "dartcompanion.firebaseapp.com",
    databaseURL: "https://dartcompanion.firebaseio.com",
    projectId: "dartcompanion",
    storageBucket: "dartcompanion.appspot.com",
    messagingSenderId: "972820681871"
  }
};