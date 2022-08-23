
import { render } from 'react-dom'
import * as React from 'react';
import { observer } from 'mobx-react';

import './style.sass'
import { Game_V } from './views/game.v';

import { state } from '../state';
import { initialSetup, startNewGame } from '../services/main.service';


initialSetup()

const Index = observer(() => {
  
  const {game} = state

  return (
    <>
      {!game ?
        <pre-game>
          <start-button onClick={startNewGame}>
            Start New Game
          </start-button>
        </pre-game>
      : <Game_V {...{game}} />
      
      }
    </>
  )
  
})



render(<Index />, 
  document.body.appendChild(
    document.createElement('military-symbols')
  )
)
