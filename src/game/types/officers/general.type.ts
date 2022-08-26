import { Officer } from "../officer.type";
import { GeneralRankName_S } from "../rank-names.set";

/**
 * correspond with the echelon
 */


export type GeneralOfficer = Officer & {
  rankName: GeneralRankName_S
  stars: number
  
}

export type GeneralOfArmies = GeneralOfficer & {
  rankName: 'General of Armies'
  stars: 6
}
export type FieldMarshal = GeneralOfficer & {
  rankName: 'Field Marshal'
  stars: 5
}
export type GeneralOfTheArmy = GeneralOfficer & {
  rankName: 'General of the Army'
  stars: 5
}
export type General = GeneralOfficer & {
  rankName: 'General'
  stars: 4
}
export type LieutenantGeneral = GeneralOfficer & {
  rankName: 'Lieutenant General'
  stars: 3
}
export type MajorGeneral = GeneralOfficer & {
  rankName: 'Major General'
  stars: 2
}
export type BrigadierGeneral = GeneralOfficer & {
  rankName: 'Brigadier General'
  stars: 1
}
