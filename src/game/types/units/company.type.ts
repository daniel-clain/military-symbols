
/**
 * typically consisting of 80–250 soldiers and usually commanded by a major or a captain.
 */

import { Captain, Major } from "../officers/general.type";
import { Unit } from "../unit.type";

export type Company = Unit & {
  commander: Major | Captain
}