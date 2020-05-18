import * as isoly from "isoly"
import { Change02 } from "./Change02"
import { Change03 } from "./Change03"
import { Change04 } from "./Change04"
import { Change05 } from "./Change05"
import { Change06 } from "./Change06"
import { Change07 } from "./Change07"

describe("Change is", () => {
	it("is 01-02", async () => {
		expect(Change02.is({ date: isoly.DateTime.now(), indicator: "00" })).toBeFalsy()
		expect(Change02.is({ date: isoly.DateTime.now(), indicator: "01" })).toBeTruthy()
		expect(Change02.is({ date: isoly.DateTime.now(), indicator: "02" })).toBeTruthy()
		expect(Change02.is({ date: isoly.DateTime.now(), indicator: "03" })).toBeFalsy()
	})
	it("is 01-03", async () => {
		expect(Change03.is({ date: isoly.DateTime.now(), indicator: "00" })).toBeFalsy()
		expect(Change03.is({ date: isoly.DateTime.now(), indicator: "01" })).toBeTruthy()
		expect(Change03.is({ date: isoly.DateTime.now(), indicator: "02" })).toBeTruthy()
		expect(Change03.is({ date: isoly.DateTime.now(), indicator: "03" })).toBeTruthy()
		expect(Change03.is({ date: isoly.DateTime.now(), indicator: "04" })).toBeFalsy()
	})
	it("is 01-04", async () => {
		expect(Change04.is({ date: isoly.DateTime.now(), indicator: "00" })).toBeFalsy()
		expect(Change04.is({ date: isoly.DateTime.now(), indicator: "01" })).toBeTruthy()
		expect(Change04.is({ date: isoly.DateTime.now(), indicator: "02" })).toBeTruthy()
		expect(Change04.is({ date: isoly.DateTime.now(), indicator: "03" })).toBeTruthy()
		expect(Change04.is({ date: isoly.DateTime.now(), indicator: "04" })).toBeTruthy()
		expect(Change04.is({ date: isoly.DateTime.now(), indicator: "05" })).toBeFalsy()
	})
	it("is 01-05", async () => {
		expect(Change05.is({ date: isoly.DateTime.now(), indicator: "00" })).toBeFalsy()
		expect(Change05.is({ date: isoly.DateTime.now(), indicator: "01" })).toBeTruthy()
		expect(Change05.is({ date: isoly.DateTime.now(), indicator: "02" })).toBeTruthy()
		expect(Change05.is({ date: isoly.DateTime.now(), indicator: "03" })).toBeTruthy()
		expect(Change05.is({ date: isoly.DateTime.now(), indicator: "04" })).toBeTruthy()
		expect(Change05.is({ date: isoly.DateTime.now(), indicator: "05" })).toBeTruthy()
		expect(Change05.is({ date: isoly.DateTime.now(), indicator: "06" })).toBeFalsy()
	})
	it("is 01-06", async () => {
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "00" })).toBeFalsy()
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "01" })).toBeTruthy()
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "02" })).toBeTruthy()
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "03" })).toBeTruthy()
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "04" })).toBeTruthy()
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "05" })).toBeTruthy()
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "06" })).toBeTruthy()
		expect(Change06.is({ date: isoly.DateTime.now(), indicator: "07" })).toBeFalsy()
	})
	it("is 01-07", async () => {
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "00" })).toBeFalsy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "01" })).toBeTruthy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "02" })).toBeTruthy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "03" })).toBeTruthy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "04" })).toBeTruthy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "05" })).toBeTruthy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "06" })).toBeTruthy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "07" })).toBeTruthy()
		expect(Change07.is({ date: isoly.DateTime.now(), indicator: "08" })).toBeFalsy()
	})
})
