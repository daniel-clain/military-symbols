import { runInAction } from "mobx";

export function initialSetup(){
  startNewGame()
}

export function startNewGame() {
  runInAction(() => {
    //state.game = createGame()
  })
}
