import { Officer } from "./officer.type"
import { GeneralOfficer } from "./officers/general.type"

type Formations_S = 'District' | 'Army' | 'Corps' | ' Division' |  'Brigade' 

export interface  Formation {
  commandingOfficers: (Officer | GeneralOfficer)[]
  formationType: Formations_S
  xs: number
} 