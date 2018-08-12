import { DialogflowApp } from 'actions-on-google'

export const name = 'input.welcome'
export function handler(app: DialogflowApp) {
	app.tell("Hi . This is from Demo Action")
}