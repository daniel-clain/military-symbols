
import { observer } from 'mobx-react';
import * as React from 'react';
import { Game } from '../../game/types/game.type.';
import { InstanceCreator_C } from '../components/instance-creator.c';
import background from './../images/map.jpg';


export const Game_V = observer(({game}: {game: Game}) => {


  return <>
    <game-view>
      <InstanceCreator_C />

      <game-background>
        <img src={background} />
      </game-background>

    </game-view>
  </>
})

