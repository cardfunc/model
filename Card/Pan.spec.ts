import * as model from "../index"

describe("Card.Pan", () => {
	it("last4", () => expect(model.Card.Pan.last4("5105105105105100")).toEqual("5100"))
})
