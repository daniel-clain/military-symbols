
import { Formation } from "../formation.type"
import { LieutenantGeneral } from "../officers/general.type"
import { Division } from "./division.type"

/**
 * ut from two to five divisions and anywhere from 40,000 to 80,000 are the numbers stated by the US Department of Defense.
 */
export interface Corps extends Formation {
  formationType:  'Corps',
  xs: 3,
  commandingOfficers: [LieutenantGeneral]
  divisions: [
    Division, Division,
    Division?, Division?, Division?
  ]
}

const corps: Corps = {
  formationType: 'Corps',
  xs: 3,
  commandingOfficers: [{name: 'bob', rankName: 'Lieutenant General', stars: 3, }],
  divisions: [
    {
      xs: 2,
      formationType: 'Corps',
      regiments: [],
      brigades: [],
      commandingOfficers: [{
        name: 'fred',
        rankName: 'Major General',
        stars: 2
      }]
    },
    {
      xs: 2,
      formationType: 'Corps',
      regiments: [],
      brigades: [],
      commandingOfficers: [{
        name: 'greg',
        rankName: 'Major General',
        stars: 2
      }]
    }
  ]
  
}

console.log('corps :>> ', corps);