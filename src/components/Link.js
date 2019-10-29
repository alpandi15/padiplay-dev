import React from 'react';

const Link = (props) => {
  return (
    <a {...props} >
      {props.children}
    </a>
  );
}

export default Link;