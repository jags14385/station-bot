import { DialogflowApp } from '../../node_modules/@types/actions-on-google/dialogflow-app';

export const name = 'demo_action'
export function handler(app: DialogflowApp) {
	const paramNumber = parseInt(app.getArgument('number').toString())
	app.tell(`I incremented your number. Here you go: ${paramNumber + 1}`)
}