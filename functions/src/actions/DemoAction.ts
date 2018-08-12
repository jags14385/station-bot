import { DialogflowApp, Dialogflow } from 'actions-on-google'

export const name = 'input.welcome'
export function handler(app: Dialogflow) {
	app.tell("Hi . This is from Demo Action")
}