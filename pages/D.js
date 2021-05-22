import React, { useContext } from 'react';
import { CountContext } from '.';

const D = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      D입니다. {countContext.countState}
    </div>
  )
};

export default D;
