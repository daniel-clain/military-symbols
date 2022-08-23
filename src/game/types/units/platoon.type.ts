
/**
 * typically consisting of 80–250 soldiers and usually commanded by a major or a captain.
 */

 import { FirstLieutenant, SecondLieutenant } from "../officers/general.type";
 import { Unit } from "../unit.type";
 
 export type Platoon = Unit & {
   commander: FirstLieutenant | SecondLieutenant
 }