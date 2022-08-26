import { Formation } from "../formation.type"
import { Major, Colonel, Brigadier } from "../../officer.type"
import { BrigadierGeneral } from "../../officers/general.type"
import { Battalion } from "../units/battalion.type"
import { UnitTypes_S } from "../../military-unit.type"

export type Brigade = Formation & {
  commandingOfficers: (Major | BrigadierGeneral | Colonel | Brigadier)[]
  crosses: 1
  madeUpOf:  (Battalion<UnitTypes_S> | Battalion<UnitTypes_S>)[]
  echelonName: 'Brigade'
}

/**
 *  three to six battalions plus supporting elements. It is roughly equivalent to an enlarged or reinforced regiment. Two or more brigades may constitute a division.
 */

