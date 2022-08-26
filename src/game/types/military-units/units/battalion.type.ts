
import { UnitTypes_S } from "../../military-unit.type"
import { LieutenantColonel } from "../../officer.type"
import { Unit } from "../unit.type"
import { Platoon } from "./sub-units/platoon.type"
import { Section } from "./sub-units/section.type"

export type Battalion<T extends UnitTypes_S> = Unit & {
  commandingOfficers: [LieutenantColonel]
  stripes: 2
  unitType: T
  madeUpOf:  (Platoon | Section)[]
}

/**
 * Several companies (from 2 to 4) make up a battalion (A division for artillery.), platoons not included in companies also enter the battalion. The battalion is named for its type of troops (tank, motorized rifle, engineer-sapper, communications). But the battalion includes the formation of other types of weapons (For example, in the motorized rifle battalion, in addition to motorized rifle companies there is a mortar battery, a platoon of material support, a platoon of communications.) The battalion has its headquarters. The strength is from 250 to 950 people (theoretically, the number of battalions is possible and less). The name of the formation (detachment, platoon, company, etc) depends not on the size of the personnel, but on the type of troops and those tactical tasks that are assigned to the formation of this type. Hence, such a spread in the number of personnel in formations having the same name.
 * 
 * Battalions consist of four to six companies and can include up to about 1,000 soldiers. 
 * 
 * A battalion is a regimental sub-unit of infantry amounting to between 500 and 1,000 soldiers. It normally consists of a headquarters and three or more companies. 
 * 
 * 
 * 3 but varies on the type of unit
 */