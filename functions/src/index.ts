import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as DemoAction from './actions/DemoAction'
import { DialogflowApp } from '../node_modules/@types/actions-on-google/dialogflow-app';


admin.initializeApp(functions.config().firebase);
const db = admin.database();

// https://firebase.google.com/docs/functions/typescript

// Dialogflow Intent names
const WELCOME_INTENT = 'input.welcome';

export const helloWorld = functions.https.onRequest((request, response) => {

    console.log('headers: ' + JSON.stringify(request.headers));
    console.log('body: ' + JSON.stringify(request.body));

    const dialogflowApp = new DialogflowApp({request, response})
    interface Action {
        name: string,
        handler: (app: DialogflowApp) => void
    }
    const actions: Action[] = [
    // Add actions here.
    DemoAction
    ]
});
