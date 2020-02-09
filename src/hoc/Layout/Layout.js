import React from 'react';
import './Layout.scss';

export default props => {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
};
