

import { Formation } from "../formation.type"
import { General, GeneralOfTheArmy } from "../../officers/general.type"
import { Division } from "./division.type"
import { Brigade } from "./brigade.type"

/**
 * is a large military formation of operational designation. The army includes divisions, regiments, battalions of all military branches. An army may also contain one or more corps. The rank of officer is an Army Colonel General. An army is usually not formed in peacetime and regiments, divisions and battalions are part of the District.
 * 
 *  military formation in many armed forces, composed of two or more corps and may be subordinate to an army group. Likewise, air armies are equivalent formation within some air forces, and within a navy the comparable notion is that of a fleet. A field army is composed of 300,000 to 600,000 troops.
 * 
 * field army is composed of a headquarters, and usually controls at least two corps, beneath which are a variable number of divisions. A battle is influenced at the field army level by transferring divisions and reinforcements from one corps to another to increase the pressure on the enemy at a critical point
 * 
 */
export type FieldArmy = Formation & {
  crosses: 4
  madeUpOf: (Division | Brigade)[]
  commandingOfficers: [General | GeneralOfTheArmy]
  echelonName: 'Field Army'
}