import { Dashes, Dots, MilitaryUnit } from "../military-unit.type"

/**
 * Company < Battalion < Regiment
 */

export type SubUnitNames_S = 'Platoon' | 'Section'
export type UnitNames_S = 'Regiment' | 'Battalion' | 'Company' | SubUnitNames_S

export type Unit = MilitaryUnit & Dashes &{
  echelonName: UnitNames_S
}

export type SubUnit = MilitaryUnit & Dots & {
  echelonName: SubUnitNames_S
}
/**
 * United States Army Chain of Command (Organization)

Squad - 9 to 10 soldiers. Typically commanded by a sergeant or staff sergeant, a squad or section is the smallest element in the Army structure, and its size is dependent on its function.

Platoon - 16 to 44 soldiers. A platoon is led by a lieutenant with an NCO as second in command, and consists of two to four squads or sections.

Company - 62 to 190 soldiers. Three to five platoons form a company, which is commanded by a captain with a first sergeant as the commander's principle NCO assistant. An artillery unit of equivalent size is called a battery, and a comparable armored or air cavalry unit is called a troop.

Battalion - 300 to 1,000 soldiers. Four to six companies make up a battalion, which is normally commanded by a lieutenant colonel with a command sergeant major as principle NCO assistant. A battalion is capable of independent operations of limited duration and scope. An armored or air cavalry unit of equivalent size is called a squadron.

Brigade - 3,000 to 5,000 solders. A brigade headquarters commands the tactical operation of two to five organic or attached combat battalions. Normally commanded by a colonel with a command sergeant major as senior NCO, brigades are employed on independent or semi-independent operations. Armored cavalry, ranger and special forces units this size are categorized as regiments or groups.

Division - 10,000 to 15,000 soldiers. Usually consisting of three brigade-sized elements and commanded by a major general, divisions are numbered and assigned missions based on their structures. The division performs major tactical operations for the corps and can conduct sustained battles and engagements.

Corps - 20,000 to 45,000 soldiers. Two to five divisions constitute a corps, which is typically commanded by a lieutenant general. As the deployable level of command required to synchronize and sustain combat operations, the corps provides the framework for multi-national operations.
 */