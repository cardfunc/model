import * as model from "../index"

describe("Merchant.Creatable", () => {
	const key = {
		name: "test",
		url: "http://example.com",
		descriptor: "test transaction",
		country: "SE",
		acquirer: {
			protocol: "clearhaus",
			url: "https://gateway.test.clearhaus.com",
			key: "36e74a69-7fee-4a37-bcd9-6a1422028ff3",
		},
		mid: "1234",
		mcc: "1234",
		bin: {
			mastercard: "134678",
			visa: "1234",
		},
		emv3d: {
			protocol: "ch3d1",
			url: "http://localhost:7072/",
			key: "no-key",
		},
	}
	it("is", () => expect(model.Merchant.Creatable.is(key)).toBeTruthy())
	it("is simple", () => expect(model.Merchant.Creatable.is({ ...key, mid: undefined, mcc: undefined, bin: undefined })).toBeTruthy())
	it("flaw", () => {
		const k = key
		delete k.url
		expect(model.Merchant.Creatable.flaw(key)).toEqual({
			flaws: [
				{
					property: "url",
					type: "string",
				},
			],
			type: "model.Merchant.Creatable",
		})
	})
})
