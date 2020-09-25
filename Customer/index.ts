import { Address } from "../Address"
import { PhoneNumber } from "../PhoneNumber"
import { Email } from "../Email"

export interface Customer {
	billing?: Address
	shipping?: Address
	email?: Email
	homePhone?: PhoneNumber
	mobilePhone?: PhoneNumber
	workPhone?: PhoneNumber
}

export namespace Customer {
	export function is(value: Customer | any): value is Customer {
		return (
			typeof value == "object" &&
			(value.billing == undefined || Address.is(value.billing)) &&
			(value.shipping == undefined || Address.is(value.shipping)) &&
			(value.email == undefined || Email.is(value.email)) &&
			(value.homePhone == undefined || PhoneNumber.is(value.homePhone)) &&
			(value.mobilePhone == undefined || PhoneNumber.is(value.mobilePhone)) &&
			(value.workPhone == undefined || PhoneNumber.is(value.workPhone))
		)
	}
}
