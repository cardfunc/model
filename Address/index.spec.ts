import * as model from "../index"

describe("Address", () => {
	it("is", () =>
		expect(model.Address.is({ city: "Somecity", country: "USA", line1: "Someroad 1", postCode: "12345" })).toBeTruthy())
	it("is similar", () => {
		const first = { city: " Somecity ", country: "Swe", line1: "Someroad 1  ", postCode: "12345" }
		const second = { city: "SOMECITY", country: "SWE", line1: "  SOMEROAD 1 ", postCode: "  12345 " }
		expect(model.Address.is(first)).toBeTruthy()
		expect(model.Address.is(second)).toBeTruthy()
		expect(model.Address.compare(first, second)).toBeTruthy()
	})
	it("is not same", () => {
		const first = { city: "Somecity", country: "USA", line1: "Someroad 1", postCode: "12345" }
		const second = { city: "Somecity", country: "SWE", line1: "Someroad 1", postCode: "12345" }
		expect(model.Address.is(first)).toBeTruthy()
		expect(model.Address.is(second)).toBeTruthy()
		expect(model.Address.compare(first, second)).toBeFalsy()
	})
	it("is similar", () => {
		const first = { city: " Somecity ", country: "Swe", line1: "Solvägen 1		", postCode: "12345" }
		const second = { city: "SOMECITY", country: "SWE", line1: "  SOLVÄGEN 1  ", postCode: "	12345	" }
		expect(model.Address.is(first)).toBeTruthy()
		expect(model.Address.is(second)).toBeTruthy()
		expect(model.Address.compare(first, second)).toBeTruthy()
	})
	it("is not same", () => {
		const first = { city: "Somecity", country: "SWE", line1: "Alvägen 1", postCode: "12345" }
		const second = { city: "Somecity", country: "SWE", line1: "Ålvägen 1", postCode: "12345" }
		expect(model.Address.is(first)).toBeTruthy()
		expect(model.Address.is(second)).toBeTruthy()
		expect(model.Address.compare(first, second)).toBeFalsy()
	})
})
