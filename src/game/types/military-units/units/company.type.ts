
/**
 * typically consisting of 80–250 soldiers and usually commanded by a major or a captain.
 * 
 * 3 platoons, it varies for different reasons
 * - lack of equipment/personel
 * - type of unit that ur constructing, u dont want it too big, eg german kncoked of moto rfle from each each regiment so it would be smaller and more mobile 
 */


import { UnitTypes_S } from "../../military-unit.type";
import { Major, Captain } from "../../officer.type";
import { Unit } from "../unit.type";

export type Company<T extends UnitTypes_S> = Unit & {
  commandingOfficers: [Major | Captain]
  stripes: 1
  unitType: T
  madeUpOf: []
}