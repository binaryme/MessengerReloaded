// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    production: false,
    // firebase: {
    //     apiKey: 'AIzaSyAJHpYPNSK2GkQdtmd33KH5lCihUWIyry0',
    //     authDomain: 'messengerreloaded.firebaseapp.com',
    //     databaseURL: 'https://messengerreloaded.firebaseio.com',
    //     projectId: 'messengerreloaded',
    //     storageBucket: 'messengerreloaded.appspot.com',
    //     messagingSenderId: '564494046787'
    // }
    firebase: {
        apiKey: "AIzaSyD9F1NEjl1XNPLHUCqEwwTc9_9r2B5Wq6A",
        authDomain: "messengerreloaded-2a655.firebaseapp.com",
        databaseURL: "https://messengerreloaded-2a655.firebaseio.com",
        projectId: "messengerreloaded-2a655",
        storageBucket: "",
        messagingSenderId: "552913412033"
    }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.