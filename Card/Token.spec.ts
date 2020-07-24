import * as model from "../index"

describe("Card Token", () => {
	it("is minimal", async () => {
		const card: model.Card.Token = {
			type: "single use",
			card: "12345678"
		}
		expect(model.Card.Token.hasInfo(card)).toBeFalsy()
		expect(model.Card.Token.is(card)).toBeTruthy()
	})
	it("has info", async () => {
		const card: model.Card.Token = {
			type: "single use",
			card: "12345678",
			scheme: "visa",
			iin: "411111",
			last4: "1111",
			expires: [12, 26],
		}
		expect(model.Card.Token.hasInfo(card)).toBeTruthy()
		expect(model.Card.Token.is(card)).toBeTruthy()
	})
	it("is minimal", async () => {
		const card: model.Card.Token = {
			type: "single use",
			card: "12345678"
		}
		expect(model.Card.Token.hasInfo(card)).toBeFalsy()
		expect(model.Card.Token.is(card)).toBeTruthy()
	})
	it("has info", async () => {
		const card: model.Card.Token = {
			type: "single use",
			card: "12345678",
			scheme: "visa",
			iin: "411111",
			last4: "1111",
			expires: [12, 26],
		}
		expect(model.Card.Token.hasInfo(card)).toBeTruthy()
		expect(model.Card.Token.is(card)).toBeTruthy()
	})
})
