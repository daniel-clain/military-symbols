
import { RankName_S } from "./rank-names.set"

export type Officer = {
  name: string
  rankName: RankName_S
}

export type Officer_A = {
  [P in keyof Officer]?: Officer[P]
} & {
}
