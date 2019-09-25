import React from 'react';

const Scroll = (props) => {
  return (
    <div style={{ overflowY: 'scroll', border: '2px dashed black', height: '45rem' }}>
      {props.children}
    </div>
  );
}

export default Scroll;