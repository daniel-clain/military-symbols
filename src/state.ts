
import { observable } from "mobx";
import { Game_D } from "./game/types/game.type.";

export type MainState = {
  game?: Game_D
}

export const state: MainState = observable({})
