/* import { Game } from "../types/game.type."
import { createOfficer } from "./officer.creator"

export const createGame = (): Game=>{

  const game: Game = {
    players: [
      {
        name: 'Fred',
        districts: [
          {
            name: 'Northern Military District'
            officer: createOfficer({
              name: 'Admiral Aleksandr Moiseyev',
            })
          },
          {
            name: 'Western Military District'
            officer: createOfficer({
              name: 'Army General Aleksandr Dvornikov'
            })
          },
          {
            name: 'Southern Military District'
            officer: createOfficer({
              name: 'Admiral Aleksandr Moiseyev'
            })
          }
        ]
      },
      {
        name: 'Greg',
        districts: [
          {
            name: 'district x'
          }]
      }
    ]
  }
  
  return game

} */