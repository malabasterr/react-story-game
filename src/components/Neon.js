import React from 'react';

function Neon(props) {
  const { name } = props;

  return (
    <h1 className="glow">
      Come inside,
      {name}
    </h1>
  );
}

export default Neon;