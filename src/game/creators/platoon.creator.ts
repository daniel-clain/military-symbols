
import { createId } from "../../services/main.service"
import { Position } from "../types/military-unit.type"
import { SubUnitNames_S } from "../types/military-units/unit.type"
import { Platoon } from "../types/military-units/units/sub-units/platoon.type"
import { Section } from "../types/military-units/units/sub-units/section.type"
import { FirstLieutenant, SecondLieutenant } from "../types/officer.type"

export const createPlatoon = (position: Position, officer: FirstLieutenant | SecondLieutenant, sections: [Section, Section, Section]): Platoon => {

  const section: Platoon = {
    id: createId(),
    echelonName: 'Platoon' as SubUnitNames_S,
    madeUpOf: [...sections],
    position,
    commandingOfficers: [officer],
    dots: 3,
    headquarters: 'ya mums house',
    sections

  }
  
  return section

} 