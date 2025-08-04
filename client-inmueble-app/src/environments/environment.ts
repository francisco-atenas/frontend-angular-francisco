// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'dev',
  firebase: {
    config: {
      apiKey: 'AIzaSyCuPmq0OK_0lyhEpbtJrPiDauSMtz1XzY0',
      authDomain: 'edificacion-app-613c8.firebaseapp.com',
      projectId: 'edificacion-app-613c8',
      storageBucket: 'edificacion-app-613c8.firebasestorage.app',
      messagingSenderId: '423490016847',
      appId: '1:423490016847:web:fbeb32ded6ab3f01937c3a',
    },
  },
  url: 'http://localhost:5555/',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
