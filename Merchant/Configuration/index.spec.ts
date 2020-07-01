import * as model from "../../index"

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
		expect(model.Merchant.Configuration.flaw(configuration)).toEqual({
			type: 'model.Merchant.Configuration',
			flaws: [
				{ property: 'descriptor', type: 'string' },
				{ property: 'country', type: 'isoly.CountryCode' },
				{ property: 'acquirer', type: 'model.Acquirer.Settings' },
				{ property: 'mid', type: 'string' },
				{ property: 'mcc', type: 'model.Merchant.CategoryCode' },
				{
					property: 'emv3d',
					type: 'model.Merchant.Emv3d',
					flaws: undefined
				},
				{ property: 'url', type: 'string' },
				{ property: 'id', type: 'string | undefined' }
			]
		})
	})
})
