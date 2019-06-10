import { Payment } from "./Payment"

describe("Payment", () => {
	it("is", async () => {
		const payment: Payment = {
			id: 10001,
			created: "2005-05-05T15:05:15Z",
			method: "card",
			status: "created",
			account: 12345,
			currency: "SEK",
			amount: 100,
			order: "test",
			reference: "1337",
		}
		expect(Payment.is(payment)).toBeTruthy()
	})
})
