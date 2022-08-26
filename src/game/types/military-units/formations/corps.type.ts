
import { Formation } from "../formation.type"
import { LieutenantGeneral } from "../../officers/general.type"
import { Division } from "./division.type"
import { Brigade } from "./brigade.type"

export type Corps = Formation & {
  echelonName:  'Corps',
  crosses: 3,
  commandingOfficers: [LieutenantGeneral]
  madeUpOf: (Division | Brigade)[]
}

/**
 * ut from two to five divisions and anywhere from 40,000 to 80,000 are the numbers stated by the US Department of Defense.
 */
