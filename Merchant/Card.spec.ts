import * as model from "../index"
import { Emv3d } from "./Emv3d"

describe("model.Merchant.Configuration", () => {
	it("flaws of very faulty configuration", () => {
		const configuration = {
			descriptor: 123,
			country: "alpha3",
			acquirer: 123,
			mid: 1234556789,
			mcc: 1234556789,
			emv3d: "Emv3d",
			url: 123,
			id: 123,
		}
		expect(model.Merchant.Card.flaw(configuration)).toEqual({
			type: "model.Merchant.Card",
			flaws: [
				{ property: "descriptor", type: "string" },
				{ property: "country", type: "isoly.CountryCode" },
				{ property: "acquirer", type: "model.Acquirer" },
				{ property: "mid", type: "string" },
				{ property: "mcc", type: "model.Merchant.CategoryCode" },
				{ property: "emv3d", ...Emv3d.flaw(configuration.emv3d ?? "") },
				{ property: "url", type: "string | undefined" },
				{ property: "id", type: "authly.Identifier | undefined" },
			],
		})
	})
})
