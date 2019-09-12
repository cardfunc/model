import * as isoly from "isoly"

export interface Charge {
       id: string,
       amount?: number,
       created: isoly.DateTime,
}

export namespace Charge {
       export function is(value: Charge | any): value is Charge {
       	      if ('amount' in value && typeof(value.amount) != "number") {
	      	 return false;
	      }

	      return true
       }

}