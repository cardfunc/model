import * as model from "../index"

describe("Card.Change", () => {
	it("pan & expires", async () => {
		const card: model.Card.Change = {
			pan: "4111111111111111",
			expires: [12, 20],
		}
		expect(model.Card.Change.is(card)).toBeTruthy()
	})
	it("is (empty) Partial<Creatable>", async () => {
		const card: model.Card.Change = {}
		expect(model.Card.Change.is(card)).toBeTruthy()
	})
	it("is card with verification (pares)", async () => {
		const card: model.Card.Change = {
			pan: "4111111111111111",
			expires: [2, 22],
			csc: "123",
			verification: {
				type: "pares",
				data: "examplepares",
			},
		}
		expect(model.Card.Change.is(card)).toBeTruthy()
	})
	it("is card with pan & verification (method)", async () => {
		const card: model.Card.Change = {
			pan: "4111111111111111",
			verification: {
				type: "method",
				data: {
					someProperty: "example1",
					anotherProperty: "example2",
				},
			},
		}
		expect(model.Card.Change.is(card)).toBeTruthy()
	})
	it("is card with csc and verification (challenge)", async () => {
		const card: model.Card.Change = {
			csc: "123",
			verification: {
				type: "challenge",
				data: {
					something: "example3",
					another: "example4",
					nothing: "",
				},
			},
		}
		expect(model.Card.Change.is(card)).toBeTruthy()
	})
	it("is (not) card with csc and verification as string", async () => {
		const card = {
			csc: "123",
			verification: "not valid",
		}
		expect(model.Card.Change.is(card)).toBeFalsy()
	})
	it("card.pares no longer valid", async () => {
		const card = {
			csc: "123",
			pares: "abc.def.ghi",
		}
		expect(model.Card.Change.is(card)).toBeFalsy()
	})
})
