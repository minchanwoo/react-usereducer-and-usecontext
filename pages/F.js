import React, { useContext } from 'react';
import { CountContext } from '.';

const F = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      F
      <button onClick={()=> 
        countContext.countDispatch('increment')}
      >
        In
      </button>
      <button onClick={()=> 
        countContext.countDispatch('decrement')}
      >
        De
      </button>
      <button onClick={()=> 
        countContext.countDispatch('reset')}
      >
        Re
      </button>
    </div>
  )
};

export default F;