
import { RankName_S } from "./rank-names.set"

export type Officer = {
  name: string
  rankName: RankName_S
}

export type Officer_A = {
  [P in keyof Officer]?: Officer[P]
} & {
}


export type Colonel = Officer & {
  rankName: 'Colonel'
  stars: 1
}
export type LieutenantColonel = Officer & {
  rankName: 'Lieutenant Colonel'
}
export type Major = Officer & {
  rankName: 'Major'
}
export type Brigadier = Officer & {
  rankName: 'Brigadier'
}
export type Captain = Officer & {
  rankName: 'Captain'
}
export type FirstLieutenant = Officer & {
  rankName: 'First Lieutenant'
}
export type SecondLieutenant = Officer & {
  rankName: 'Second Lieutenant'
}

export type SergeantMajor = Officer & {
  rankName: 'Sergeant Major'

}
export type Sergeant = Officer & {
  rankName: 'Sergeant'
}
