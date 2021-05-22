import React, { useReducer, createContext } from 'react';
import { reducer, initialState} from '../reducers';

import A from "./A";
import B from './B';
import C from './C';

export const CountContext = createContext();

const Home = () => {
  
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <CountContext.Provider 
      value={{countState: count, countDispatch: dispatch}}
    >
      <div>
        Count = {count}
        <A />
        <B />
        <C />
      </div>
    </CountContext.Provider>
  )
};

export default Home;
