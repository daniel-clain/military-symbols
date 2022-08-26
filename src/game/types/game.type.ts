import { District } from "./district.type"
import { MilitaryUnit } from "./military-unit.type"


export type Game = {
  players: Player[]
}

type Player = {
  name: string
  districts: District[]
  selectedUnit?: MilitaryUnit
}

