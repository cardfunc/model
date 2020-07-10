import * as gracely from "gracely"
import { KeyInfo as ConfigurationCardKeyInfo } from "./Card/KeyInfo"
import { Override as ConfigurationOverride } from "./Override"

export type KeyInfo = ConfigurationCardKeyInfo & ConfigurationOverride

export namespace KeyInfo {
	export function is(value: KeyInfo | any): value is KeyInfo {
		return typeof value == "object" &&
			ConfigurationCardKeyInfo.is(value) &&
			ConfigurationOverride.is(value)
	}
	export function flaw(value: any | KeyInfo): gracely.Flaw {
		return {
			type: "model.Merchant.Configuration.KeyInfo",
			flaws: typeof value != "object" ? undefined :
				[
					...(ConfigurationCardKeyInfo.flaw(value).flaws ?? []),
					...(ConfigurationOverride.flaw(value).flaws ?? []),
				].filter(gracely.Flaw.is) as gracely.Flaw[],
		}
	}
}
