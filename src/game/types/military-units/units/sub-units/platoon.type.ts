
/**
 * One is a platoon, which is part of a company and made up of squads. A platoon usually has its own headquarters and is under the command of a lieutenant. In a war, platoons will be stationed in places according to strategy — the platoon might be attacking or defending.
 * 
 * u can have tank platoon, also infantry platoon
 * the tanks in the platoon are no sections
 * 
 *
 * 
 */
import { FirstLieutenant, SecondLieutenant } from "../../../officer.type";
import { SubUnit } from "../../unit.type";
import { Section } from "./section.type";
 
 export type Platoon = SubUnit & {
  commandingOfficers: [FirstLieutenant | SecondLieutenant]
  headquarters: string
  sections: [Section, Section, Section]
  dots: 3   
 }