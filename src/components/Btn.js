import React, { useContext } from 'react';
import titleContext from '../context/titleContext';

function Btn({ title }) {
  const t = useContext(titleContext);

  return <button>{title + ' ' + t}</button>;
}

Btn.defaultProps = {
  title: 'default title',
};

export default Btn;
