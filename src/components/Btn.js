import React, { useContext } from 'react';
import titleContext from '../context/titleContext';

function Btn() {
  const title = useContext(titleContext);

  return <button>{title}</button>;
}

export default Btn;
