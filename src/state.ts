
import { observable } from "mobx";
import { createPlatoon } from "./game/creators/platoon.creator";
import { createSection } from "./game/creators/section.creator";
import { Game } from "./game/types/game.type";

export type MainState = {
  game?: Game
}

const testGame: Game = {
  players: [{
    name: 'Daniel',
    districts: [
      {
        militaryUnits: [
          createSection(
            {left: 65, top: 65},  
            {
              name: 'Daniel',
              rankName:"Sergeant"
            }
          ),
          createPlatoon(
            {left: 35, top: 35}, 
            {
              name: 'Louis',
              rankName:"First Lieutenant"
            },
            [
              createSection(
                {left: 55, top: 45}, {
                name: 'Fritz',
                rankName:"Sergeant"
              }),
              createSection(
                {left: 55, top: 45}, {
                name: 'Jessie',
                rankName:"Sergeant"
              }),
              createSection(
                {left: 55, top: 45}, {
                name: 'Adolf',
                rankName:"Sergeant"
              })
            ]
          )
        ]
      }
    ]
  }]
}

export const state: MainState = observable({game: testGame})
