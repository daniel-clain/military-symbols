
import { action } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { useEffect } from 'react';
import { Game } from '../../game/types/game.type';
import { Position } from '../../game/types/military-unit.type';
import { moveSelectedUnit, onRightClickMap } from '../../services/main.service';
import { state } from '../../state';
import { InstanceCreator_C } from '../components/instance-creator.c';
import { MilitaryUnit_C } from '../components/military-unit.c';
import background from './../images/map.jpg';


export const Game_V = observer(({game}: {game: Game}) => {

  const militaryUnits = game.players[0]?.districts[0]?.militaryUnits
  const playersSelectedUnit = game.players[0]?.selectedUnit
  useEffect(() => {
    onRightClickMap((position: Position) => {
      moveSelectedUnit(position)
    })    
  }, [])

  return <>
    <game-view>
      <InstanceCreator_C />
      <region-map onClick={action(() => {
          state.game!.players[0]!.selectedUnit = undefined
        })}>
        <img src={background} />
        
        <military-units>
          {militaryUnits?.map(militaryUnit => 
            <MilitaryUnit_C 
              key={militaryUnit.id} 
              {...{militaryUnit}}
              isSelected={militaryUnit == playersSelectedUnit}
            />
          ) || <></>} 
        </military-units>
      </region-map>

    </game-view>
  </>
})

