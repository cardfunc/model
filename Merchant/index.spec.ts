import * as model from "../index"

describe("Merchant", () => {
	const merchant: model.Merchant = {
		card: {
			url: "http://localhost:7082",
			id: "test",
			acquirer: {
				protocol: "clearhaus",
				url: "https://gateway.test.clearhaus.com",
				key: "36e74a69-7fee-4a37-bcd9-6a1422028ff3",
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
		name: "Test AB",
		id: "test",
		url: "http://example.com",
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
	it("flaw of {} as a merchant", () => {
		expect(model.Merchant.flaw({})).toEqual({
			type: 'model.Merchant',
			flaws: [
				{ property: 'id', type: 'authly.Identifier' },
				{ property: 'name', type: 'string' },
				{ property: 'url', type: 'string' },
				{
					property: 'card',
					type: 'model.Merchant.Configuration',
					flaws: undefined
				}
			]
		})
	})
})
