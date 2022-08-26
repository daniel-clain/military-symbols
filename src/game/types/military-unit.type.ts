/**
 * the ranking system
 * each one represents a different size
 * 
 */

import { Officer } from "./officer.type"
import { UnitNames_S } from "./military-units/unit.type"
import { FormationNames_S } from "./military-units/formation.type"

export type Crosses = {
   crosses: 1 | 2 | 3 | 4
}

export type Dashes = {
   dashes: 1 | 2 | 3
}

export type Dots = {
   dots:  2 | 3 
}

export type MilitaryUnitNames_S = FormationNames_S | UnitNames_S

export type MilitaryUnit = {
   id: string
   position: Position
   echelonName: MilitaryUnitNames_S
   commandingOfficers: Officer[]
   madeUpOf: MilitaryUnit[]
   unitType: UnitTypes_S
}

export type UnitTypes_S = 'Mechanized Infantry' | 'Tank' | 'Artillery' | 'Missile'
/**
 * percentage vals, eg 25% = 25
 */
export type Position = {
   left: number, top: number
}