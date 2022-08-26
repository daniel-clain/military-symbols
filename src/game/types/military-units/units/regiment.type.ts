
import { UnitTypes_S } from "../../military-unit.type";
import { Colonel } from "../../officer.type";
import { Unit } from "../unit.type";

export type Regiment<T extends UnitTypes_S> = Unit &{
  commandingOfficers: [Colonel]
  stripes: 3
  unitType: T
  madeUpOf: []
}

/**
 * with approximately 800 men and commanded by a colonel.
 * 
 */

/**
 * 'Mechanized Infantry' | 'Tank' are the core ones
 * btg battalion tactical group
 */
