import { observer } from 'mobx-react';
import * as React from 'react';
import { state } from '../../state';

export const InstanceCreator_C = observer(() => {
  const {game} = state
  console.log('game :>> ', game);
  return <>
    <instance-creator>
      
    </instance-creator>
  </>
})