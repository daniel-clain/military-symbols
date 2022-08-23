import { GeneralOfTheArmy, FieldMarshal, General } from "./officers/general.type"

/**
 * Company < Battalion < Regiment
 */

export type UnitNames_S = 'Company' | 'Battalion' | 'Regiment'

export type Unit = {
  commandingOfficers: [GeneralOfTheArmy | FieldMarshal | General]
  unitType: UnitNames_S
}