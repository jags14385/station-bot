import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as Dialogflow from 'actions-on-google';

admin.initializeApp(functions.config().firebase);
const db = admin.database();

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});
