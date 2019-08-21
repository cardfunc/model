import * as model from "../dist"

describe("Merchant.Key", () => {
	const key = {
		iss: "http://localhost:7082",
		iat: 1565200888358,
		aud: "private",
		sub: "par9",
		name: "test",
		descriptor: "test transaction",
		country: "SE",
		acquirer: {
			protocol: "clearhaus",
			url: "https://gateway.test.clearhaus.com",
			key: "36e74a69-7fee-4a37-bcd9-6a1422028ff3",
		},
		mcc: "1234",
		bin: {
			mastercard: "134678",
			visa: "1234",
		},
	}
	it("is", () => expect(model.Merchant.Key.is(key)).toBeTruthy())
	it("Merchant.Creatable.is", () => expect(model.Merchant.Creatable.is(key)).toBeTruthy())
	it("flaw", () => {
		const k = key
		delete k.sub
		expect(model.Merchant.Key.flaw(key)).toEqual({
			flaws: [
				{
					condition: "Merchant identifier.",
					property: "sub",
					type: "authly.Identifier",
				},
			],
			type: "model.Merchant.Key",
		})
	})
})
