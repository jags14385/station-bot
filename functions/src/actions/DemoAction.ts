// import { DialogflowApp } from 'actions-on-google'

import { DialogflowApp } from '../../node_modules/@types/actions-on-google'


export const name = 'input.welcome'
export function handler(app: DialogflowApp) {
	app.tell("Hi . This is from Demo Action")
}