import * as authly from "authly"
import { Creatable as CardCreatable } from "./Card/Creatable"
import { Audience as KeyAudience } from "./Key/Audience"
import { Key } from "./Key/index"
import * as V1 from "./V1"

export type UiKey = Omit<Key, "card"> & { card: CardCreatable }
export namespace UiKey {
	export function is(value: any | Key): value is UiKey {
		return (
			typeof value == "object" &&
			authly.Identifier.is(value.sub) &&
			typeof value.iss == "string" &&
			(KeyAudience.is(value.aud) || (Array.isArray(value.aud) && value.aud.every(KeyAudience.is))) &&
			typeof value.iat == "number" &&
			typeof value.name == "string" &&
			typeof value.url == "string" &&
			CardCreatable.is(value.card)
		)
	}
	export async function unpack(
		key: authly.Token | undefined,
		...audience: ("private" | "public" | "account")[]
	): Promise<UiKey | undefined> {
		let result
		if (key) {
			result = await authly.Verifier.create()
				.add(authly.Property.Remover.create(["card.acquirer", "card.emv3d", "acquirer", "emv3d"]))
				.verify(key, ...audience)
			if (result && (result as any).option?.card) {
				const cardKey = await authly.Verifier.create<V1.Key>()
					.add(authly.Property.Remover.create(["card.acquirer", "card.emv3d", "acquirer", "emv3d"]))
					.verify((result as any).option.card, ...audience)
				result = cardKey ? Key.upgrade(cardKey) : undefined
			}
			if (!UiKey.is(result))
				result = undefined
		}
		return result
	}
	export function upgrade(key: UiKey | Key | V1.Key): UiKey
	export function upgrade(key: UiKey | Key | V1.Key | undefined): UiKey | undefined
	export function upgrade(key: UiKey | Key | V1.Key | undefined): UiKey | undefined {
		return key == undefined
			? undefined
			: is(key)
			? key
			: {
					sub: key.sub,
					iss: key.iss,
					aud: key.aud,
					iat: key.iat,
					name: key.name,
					url: key.url,
					card: {
						url: key.iss,
						id: key.sub,
						country: key.country,
						mid: key.mid,
						mcc: key.mcc,
					},
			  }
	}
}
