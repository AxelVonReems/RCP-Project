import React, { useState } from 'react';

const Aleksei = () => {

  const [myStr, setMyStr] = useState('Unknown');
  const [myInt, setMyInt] = useState(0);

  return (
    <div>
      <button onClick={() => {
        setMyInt(myInt + 1);
      }}>
        Current count is {myInt}
      </button>
      {
        myInt % 2 === 0
        ? <p>Number is even</p>
        : <p>Number is odd</p>
      }
    </div>
  )
}

export default Aleksei
