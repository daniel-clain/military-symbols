import { Officer } from "../officer.type";

export type GeneralOfficer = Officer & {
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


export type Colonel = Officer & {
  rankName: 'Colonel'
  stars: 1
}
export type LieutenantColonel = Officer & {
  rankName: 'Lieutenant Colonel'
}
export type Major = Officer & {
  rankName: 'Major'
}
export type Brigadier = Officer & {
  rankName: 'Brigadier'
}
export type Captain = Officer & {
  rankName: 'Captain'
}
export type FirstLieutenant = Officer & {
  rankName: 'First Lieutenant'
}
export type SecondLieutenant = Officer & {
  rankName: 'Second Lieutenant'
}