import React, { useContext } from 'react';
import { CountContext } from '.';

const D = () => {
  const countContext = useContext(CountContext);
  return (
    <div>
      Dėëë¤. {countContext.countState}
    </div>
  )
};

export default D;
