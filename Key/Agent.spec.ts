import * as model from "../index"

describe("model.Key.Agent minimal is", () => {
	it("model.Key.Agent minimal is", () => {
		const agent: model.Key.Agent = {
			aud: "agent",
			card: undefined,
			iat: 1617264014,
			iss: "https://localhost/api",
			name: "PSP",
			sub: "1234abcd",
			url: undefined,
		}
		expect(model.Key.Agent.is(agent)).toBeTruthy()
	})
	it("model.Key.Agent minimal is not", () => {
		const agent: any = {
			aud: "agent",
			card: "not a string",
			iat: 1617264014,
			iss: "https://localhost/api",
			name: "PSP",
			sub: "1234abcd",
			url: {},
		}
		expect(model.Key.Agent.is(agent)).toBeFalsy()
		expect(model.Key.Agent.flaw(agent)).toEqual({
			flaws: [
				{
					property: "url",
					type: "string | undefined",
				},
				{
					flaws: undefined,
					property: "card",
					type: "model.Merchant.Card.Creatable",
				},
			],
			type: "model.Merchant.Key.Agent",
		})
	})
	it("model.Key.Agent is", () => {
		const agent: any = {
			aud: "agent",
			card: {},
			iat: 1617264014,
			iss: "https://localhost/api",
			name: "PSP",
			sub: "1234abcd",
		}
		expect(model.Key.Agent.is(agent)).toBeTruthy()
		expect(model.Key.Agent.flaw(agent)).toEqual({
			flaws: [],
			type: "model.Merchant.Key.Agent",
		})
	})
})
