import { Formation } from "../formation.type"
import { Brigadier, BrigadierGeneral, Colonel, Major } from "../officers/general.type"
import { Battalion } from "../units/battalion.type"

/**
 *  three to six battalions plus supporting elements. It is roughly equivalent to an enlarged or reinforced regiment. Two or more brigades may constitute a division.
 */


export type Brigade = Formation & {
  commandingOfficers: (Major | BrigadierGeneral | Colonel | Brigadier)[]
  xs: 1
  battalions: [
    Battalion, Battalion, Battalion, 
    Battalion?, Battalion?, Battalion?
  ]
}