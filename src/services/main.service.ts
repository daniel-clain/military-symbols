import { runInAction } from "mobx";
import { MilitaryUnit, Position } from "../game/types/military-unit.type";
import { Formation } from "../game/types/military-units/formation.type";
import { SubUnit, Unit } from "../game/types/military-units/unit.type";
import { randomNumber, twoDec } from "../helper-functions";
import { state } from "../state";

export function initialSetup(){
  startNewGame()
}

export function startNewGame() {
  runInAction(() => {
    //state.game = createGame()
  })
}

export function createId(){
  return randomNumber({from: 10000000, to: 99999999}).toString()
}

export function getUnitType(militaryUnit: MilitaryUnit){
  if(['Section', 'Platoon'].includes(militaryUnit.echelonName)){
    return {subUnit: militaryUnit as SubUnit}
  }
  else if(['Regiment', 'Battalion', 'Company'].includes(militaryUnit.echelonName)){
    return {unit: militaryUnit as Unit}
  }
  else if(['Army Group', 'Field Army', 'Corps', 'Division', 'Brigade'].includes(militaryUnit.echelonName)){
    return {formation: militaryUnit as Formation}
  }
  else {
    throw `error: failed to find unit type for ${militaryUnit}`
  }


}


export function onRightClickMap(func: (position: Position) => void){
  const tagName = 'region-map'

  document.querySelector(tagName)?.addEventListener('contextmenu', 
    e => {
      const event = e as PointerEvent
      const target = event.currentTarget as HTMLElement
      if(target.nodeName != tagName.toUpperCase()){
        throw 'right click target should have been map units'
      }
      console.log('trigger', event)
      event.preventDefault()
      const {height, width} = target.getBoundingClientRect()
      console.log('object :>> ', height, width);
      const {offsetX, offsetY} = event
      console.log('height, width :>> ', height, width);
      console.log('x, y :>> ', offsetX, offsetY);

      const left = twoDec(offsetX/width)*100
      const top = twoDec(offsetY/height)*100
      console.log('left, top :>> ', left, top);


      func({left, top})
    }
  )
}

export function moveSelectedUnit(position: Position){
  const playersSelectedUnit = state.game!.players[0]!.selectedUnit
  if(playersSelectedUnit){
    runInAction(() => {
      playersSelectedUnit.position = position
    })
  }
}