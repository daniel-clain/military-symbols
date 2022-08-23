
import { Formation } from "../formation.type"
import { Regiment } from "../units/regiment.type"
import { Brigade } from "./brigade.type"
import { MajorGeneral } from "../officers/general.type"

/**
 *A division is a large military unit or formation, usually consisting of between 6,000 and 25,000 soldiers.
 

 * come to be units of 10,000 to 15,000 soldiers
 12,000-24,000 people


 */
export type Division = Formation & {
  xs: 2,
  regiments: Regiment[]
  brigades: Brigade[]
  commandingOfficers: [MajorGeneral]
}