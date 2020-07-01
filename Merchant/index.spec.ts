import * as model from "../index"

describe("Merchant", () => {
	const merchant = {
		id: "par9",
		name: "test",
		url: "http://example.com",
		card: {
			url: "https://api.cardfunc.com",
			descriptor: "test transaction",
			country: "SE",
			acquirer: {
				protocol: "clearhaus",
				url: "https://gateway.test.clearhaus.com",
				key: "36e74a69-7fee-4a37-bcd9-6a1422028ff3",
			},
			mcc: "1234",
			mid: "1234",
			bin: {
				mastercard: "134678",
				visa: "1234",
			},
		},
	}
	it("is", () => {
		expect(model.Merchant.is(merchant)).toBeTruthy()
	})
	it("is missing id name", () => expect(model.Merchant.is({ ...merchant, name: undefined })).toBeFalsy())
	it("flaw", () => {
		expect(model.Merchant.flaw({ ...merchant, url: undefined })).toEqual({
			flaws: [
				{ property: "url", type: "string" },
			],
			type: "model.Merchant",
		})
	})
})
