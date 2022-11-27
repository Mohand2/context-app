import React, { useContext } from 'react';
import titleContext from '../context/titleContext';

function Card(props) {
  const title = useContext(titleContext);

  return (
    <div>
      <p>Card &gt; {title} </p>
      {props.children}
    </div>
  );
}

export default Card;
