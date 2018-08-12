import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { dialogflow } from 'actions-on-google';

admin.initializeApp(functions.config().firebase);
const db = admin.database();

// https://firebase.google.com/docs/functions/typescript

// Dialogflow Intent names
const WELCOME_INTENT = 'input.welcome';

export const helloWorld = functions.https.onRequest((request, response) => {

    console.log('headers: ' + JSON.stringify(request.headers));
    console.log('body: ' + JSON.stringify(request.body));

    const app = dialogflow();

    app.intent('Default Welcome Intent', conv => {
        conv.ask('Hi, how is it going?')
        conv.ask(`Here's a picture of a cat`)
    });

    // Intent in Dialogflow called `Goodbye`
    app.intent('Goodbye', conv => {
        conv.close('See you later!')
    })
  
    app.intent('Default Fallback Intent', conv => {
        conv.ask(`I didn't understand. Can you tell me something else?`)
    })

});
