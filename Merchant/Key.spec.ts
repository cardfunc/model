import * as model from "../index"

describe("Key", () => {
	const key: model.Merchant.Key = {
		aud: "public",
		card: {
			url: "http://localhost:7082",
			id: "test",
			acquirer: {
				protocol: "clearhaus",
				url: "https://gateway.test.clearhaus.com",
				key: "123456-123456-123456",
			},
			country: "SE",
			emv3d: {
				protocol: "ch3d1",
				url: "http://localhost:7082/ch3d1sim",
				key: "no-key",
			},
			mcc: "1234",
			mid: "1234",
		},
		iat: 1583504003495,
		iss: "http://localhost:7082",
		name: "Test AB",
		sub: "test",
		url: "http://example.com",
	}
	it("is", () => expect(model.Merchant.Key.is(key)).toBeTruthy())
	it("is 2", () => {
		expect(model.Merchant.Key.is(key)).toBeTruthy()
	})
	it("is missing id name", () => expect(model.Merchant.Key.is({ country: "GB", acquirer: { protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" }, mcc: "1234", bin: { visa: "1234", mastercard: "54321" } })).toBeFalsy())
	it("flaw", () => {
		expect(model.Merchant.Key.flaw(key)).toEqual({
			flaws: [],
			type: "model.Merchant.Key",
		})
	})
})
