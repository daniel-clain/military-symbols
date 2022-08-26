import { action } from 'mobx';
import { observer } from 'mobx-react';
import * as React from 'react';
import { MilitaryUnit } from '../../game/types/military-unit.type';
import { numberLoop } from '../../helper-functions';
import { getUnitType } from '../../services/main.service';
import { state } from '../../state';
import { UnitInfo_C } from './unit-info.c';
export const MilitaryUnit_C = observer(
  ({militaryUnit, isSelected}: {militaryUnit: MilitaryUnit, isSelected?: boolean}) => {
    const {echelonName, position} = militaryUnit
    const {subUnit, unit, formation} = getUnitType(militaryUnit)
  return (
    <>
      <military-unit 
        class={`${echelonName} ${isSelected ? 'is-selected':''}`}
        style={{left: `${position.left}%`, top: `${position.top}%`}}
        onClick={action((e) => {
          e.stopPropagation()
          state.game!.players[0]!.selectedUnit = militaryUnit
        })}
      >
        <insignia-container>
          {subUnit ? 
            numberLoop(subUnit.dots, i =>
              <dot-elem key={i}>&#9679;</dot-elem>  
            )
            :<></>
          }
          {unit ? 
            numberLoop(unit.dashes, i =>
              <dash-elem key={i}>&#10072;</dash-elem>  
            )
            :<></>
          }
          {formation ? 
            numberLoop(formation.crosses, i =>
              <cross-elem key={i}>&#x2715;</cross-elem>  
            )
            :<></>
          }

        </insignia-container>

        <UnitInfo_C militaryUnit={militaryUnit}></UnitInfo_C>
        
      </military-unit>
    </>
  )
})