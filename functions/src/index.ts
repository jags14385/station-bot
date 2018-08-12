import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {WebhookClient} from 'dialogflow-fulfillment';


admin.initializeApp(functions.config().firebase);
// const db = admin.database();
// https://firebase.google.com/docs/functions/typescript
// Dialogflow Intent names
const WELCOME_INTENT = 'input.welcome';

export const helloWorld = functions.https.onRequest((request, response) => {

    // console.log('headers: ' + JSON.stringify(request.headers));
    // console.log('body: ' + JSON.stringify(request.body));

    // const dialogflowApp = dialogflow()
    // interface Action {
    //     name: string,
    //     handler: (app: DialogflowApp) => void
    // }
    // const actions: Action[] = [
    // // Add actions here.
    // DemoAction
    // ]


    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
  
    function welcome () {
      agent.add(`Welcome to my agent!`);
    }
  
    function fallback () {
      agent.add(`I didn't understand`);
      agent.add(`I'm sorry, can you try again?`);
    }

    const intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    agent.handleRequest(intentMap);

});
