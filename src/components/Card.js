import React from 'react';

function Card(props) {
  return (
    <div>
      <p>Card &gt; {props.btnTitle} </p>
      {props.children}
    </div>
  );
}

export default Card;
