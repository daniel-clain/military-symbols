/**
 * this is the smallest unit type for the purposes of this game
 * 
 * a tank is not made of sections
 * u can have an infantry section but not a tank one
 */
import { Sergeant } from "../../../officer.type"
import { SubUnit } from "../../unit.type"

 


export type Section = SubUnit & {
  commandingOfficers: [Sergeant]
  dots: 2
  echelonName: 'Section'
  madeUpOf: any[]
}

export type Section_A = {
  [P in keyof Section]?: Section[P]
}
