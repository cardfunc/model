import * as model from "../../index"

describe("Key", () => {
	const merchant = {
		sub: "par9",
		iss: "https://api.cardfunc.com",
		aud: "public",
		iat: 0,
		name: "test",
		url: "http://example.com",
		descriptor: "test transaction",
		country: "SE",
		acquirer: {
			protocol: "clearhaus",
			url: "https://gateway.test.clearhaus.com",
			key: "36e74a69-7fee-4a37-bcd9-6a1422028ff3",
			bin: {
				mastercard: "134678",
				visa: "1234",
			},
		},
		mcc: "1234",
		mid: "1234",
	}
	it("is", () =>
		expect(
			model.Key.V1.Key.is({
				sub: "par9",
				iss: "https://api.cardfunc.com",
				aud: "public",
				iat: 0,
				name: "Merchant Ltd.",
				url: "http://example.com",
				country: "GB",
				acquirer: {
					protocol: "clearhaus",
					url: "https://example.com/",
					key: "secret-api-key",
					bin: {
						visa: "1234",
						mastercard: "54321",
					},
				},
				mcc: "1234",
				mid: "1234",
			})
		).toBeTruthy())
	it("is 2", () => {
		expect(model.Key.V1.Key.is(merchant)).toBeTruthy()
	})
	it("is missing id name", () =>
		expect(
			model.Key.V1.Key.is({
				country: "GB",
				acquirer: {
					protocol: "clearhaus",
					url: "https://example.com/",
					key: "secret-api-key",
					bin: {
						visa: "1234",
						mastercard: "54321",
					},
				},
				mcc: "1234",
			})
		).toBeFalsy())
	it("flaw", () => {
		expect(model.Key.V1.Key.flaw(merchant)).toEqual({
			flaws: [],
			type: "model.Key.V1.Key",
		})
	})
})
