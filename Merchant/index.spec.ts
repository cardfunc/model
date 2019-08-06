import * as model from "../dist"

describe("Merchant", () => {
	it("is", () => expect(model.Merchant.is({ id: "123", name: "Merchant Ltd.", country: "GB", acquirer: { protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" }, mcc: "1234", bin: { visa: "1234", mastercard: "54321" } })).toBeTruthy())
	it("is missing id name", () => expect(model.Merchant.is({ country: "GB", acquirer: { protocol: "clearhaus", url: "https://example.com/", key: "secret-api-key" }, mcc: "1234", bin: { visa: "1234", mastercard: "54321" } })).toBeFalsy())
})
