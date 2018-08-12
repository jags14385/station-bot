import { DialogflowApp } from 'actions-on-google'

export const name = 'demo_action'
export function handler(app: DialogflowApp) {
	const paramNumber = parseInt(app.getArgument('number').toString())
	app.tell(`I incremented your number. Here you go: ${paramNumber + 1}`)
}