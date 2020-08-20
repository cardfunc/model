import * as model from "../../index"
import { Emv3d } from "./index"

describe("model.Merchant.Emv3d", () => {
	it("#1", () => {
		const list: Emv3d = [
			{
				protocol: "ch3d1",
				url: "www.example.com",
				key: "1234",
			},
			{
				protocol: "ch3d2",
				url: "www.example.com",
				key: "1234",
			}
		]
		const oneConfiguration: any = {
			protocol: "ch3d1",
			url: "www.example.com",
			key: "1234",
		}
		expect(Emv3d.is(list)).toBeTruthy()
		expect(Emv3d.is(oneConfiguration)).toBeTruthy()
		expect(model.Merchant.Emv3d.flaw({})).toEqual({
			type: 'model.Merchant.Emv3d',
			condition: "model.Merchant.Emv3d.Configuration | model.Merchant.Emv3d.Configuration[]"
		})
	})
})
