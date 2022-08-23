
import { LieutenantColonel } from "../ranks/lieutenant-colonel.type"
import { Unit } from "../unit.type"
import { Company } from "./company.type"
/**
 * Several companies (from 2 to 4) make up a battalion (A division for artillery.), platoons not included in companies also enter the battalion. The battalion is named for its type of troops (tank, motorized rifle, engineer-sapper, communications). But the battalion includes the formation of other types of weapons (For example, in the motorized rifle battalion, in addition to motorized rifle companies there is a mortar battery, a platoon of material support, a platoon of communications.) The battalion has its headquarters. The strength is from 250 to 950 people (theoretically, the number of battalions is possible and less). The name of the formation (detachment, platoon, company, etc) depends not on the size of the personnel, but on the type of troops and those tactical tasks that are assigned to the formation of this type. Hence, such a spread in the number of personnel in formations having the same name.
 */
export type Battalion = Unit & {
  commandingOfficers: [LieutenantColonel]
  companies: [
    Company, Company,
    Company?, Company?
  ],
  headquarters: string
}