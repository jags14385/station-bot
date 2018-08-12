import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import {WebhookClient} from 'dialogflow-fulfillment';


admin.initializeApp(functions.config().firebase);
// const db = admin.database();

export const helloWorld = functions.https.onRequest((request, response) => {

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

    function getStationInfo() {
        agent.add(`Staion intent called`);
    }

    const intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    agent.handleRequest(intentMap);

});
