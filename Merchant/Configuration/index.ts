import * as gracely from "gracely"
import { Card as ConfigurationCard } from "./Card"
import { Override as ConfigurationOverride } from "./Override"
import { KeyInfo as ConfigurationKeyInfo } from "./KeyInfo"

export type Configuration = ConfigurationCard & ConfigurationOverride

export namespace Configuration {
	export function is(value: Configuration | any): value is Configuration {
		return typeof value == "object" &&
			ConfigurationCard.is(value) &&
			ConfigurationOverride.is(value)
	}
	export function flaw(value: any | Configuration): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration",
			flaws: typeof value != "object" ? undefined :
				[
					...(ConfigurationCard.flaw(value).flaws ?? []),
					...(ConfigurationOverride.flaw(value).flaws ?? []),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
	export type Card = ConfigurationCard
	export namespace Card {
		export const is = ConfigurationCard.is
		export const flaw = ConfigurationCard.flaw
		export type KeyInfo = ConfigurationCard.KeyInfo
		export namespace KeyInfo {
			export const is = ConfigurationCard.KeyInfo.is
			export const flaw = ConfigurationCard.KeyInfo.flaw
		}
	}
	export type Override = ConfigurationOverride
	export namespace Override {
		export const is = ConfigurationOverride.is
		export const flaw = ConfigurationOverride.flaw
	}
	export type KeyInfo = ConfigurationKeyInfo
	export namespace KeyInfo {
		export const is = ConfigurationKeyInfo.is
		export const flaw = ConfigurationKeyInfo.flaw
	}
}
