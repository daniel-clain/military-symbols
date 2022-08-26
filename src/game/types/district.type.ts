import { MilitaryUnit } from "./military-unit.type"



/**
 * is the highest military formation. The front includes several armies, corps, divisions, regiments, battalions of all military branches. Fronts are never subdivided by branches of service. The front (district) is headed by the officer of the front (district) with the rank of army general. In Russia there were 6 military districts, 4 military fleets
 */
export type District = {
  militaryUnits: MilitaryUnit[]
  
}