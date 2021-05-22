import React, { useContext } from 'react';
import { CountContext } from '.';

const A = () => {
  const countContext = useContext(CountContext)
  return (
    <div>
      A
      <button onClick={()=> countContext.countDispatch('increment')}>Increment</button>
      <button onClick={()=> countContext.countDispatch('decrement')}>Decrement</button>
      <button onClick={()=> countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
};

export default A;
