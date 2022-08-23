import { District } from "./formations/district.type"


export type Game = {
  players: Player[]
}

type Player = {
  name: string
  districts: District[]
}

