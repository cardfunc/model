import { Delivery as CDelivery } from "./Delivery"
import { GiftCard as CGiftCard } from "./GiftCard"
import { Change02 } from "../Change/Change02"
import { Range02 } from "../Range/Range02"
import { Range07 } from "../Range/Range07"

export interface Risk {
	delivery?: CDelivery
	giftCard?: CGiftCard
	preOrder?: Change02
	reorder?: Range02
	shipping?: Range07
}

export namespace Risk {
	export function is(value: Risk | any): value is Risk {
		return (
			typeof value == "object" &&
			(value.delivery == undefined || CDelivery.is(value.delivery)) &&
			(value.giftCard == undefined || CGiftCard.is(value.giftCard)) &&
			(value.preOrder == undefined || Change02.is(value.preOrder)) &&
			(value.reorder == undefined || Range02.is(value.reorder)) &&
			(value.shipping == undefined || Range07.is(value.shipping))
		)
	}
	export type Delivery = CDelivery
	export namespace Delivery {
		export const is = CDelivery.is
	}
	export type GiftCard = CGiftCard
	export namespace GiftCard {
		export const is = CGiftCard.is
	}
}
