
import { Formation } from "../formation.type"
import { MajorGeneral } from "../../officers/general.type"
import { Regiment } from "../units/regiment.type"
import { UnitTypes_S } from "../../military-unit.type"
import { Company } from "../units/company.type"
import { Battalion } from "../units/battalion.type"

export type Division = Formation & {
  crosses: 2
  commandingOfficers: [MajorGeneral]
  madeUpOf: (
    Regiment<UnitTypes_S> | 
    Company<UnitTypes_S> |
    Battalion<UnitTypes_S> 
  )[]
  echelonName: 'Division'
}

/**
 *A division made up of at least 3 manouver regiments
 a tank division will have 2 regiments of tank and 1 of mech inf


 */