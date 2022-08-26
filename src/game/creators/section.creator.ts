
import { createId } from "../../services/main.service"
import { Position } from "../types/military-unit.type"
import { SubUnitNames_S } from "../types/military-units/unit.type"
import { Section } from "../types/military-units/units/sub-units/section.type"
import { Sergeant } from "../types/officer.type"

export const createSection = (position: Position, sergeant: Sergeant): Section => {

  const echelonName: SubUnitNames_S = 'Section'

  const section: Section = {
    id: createId(),
    position,
    madeUpOf: [],
    commandingOfficers: [sergeant],
    dots: 2,
    echelonName
  }
  
  return section

} 