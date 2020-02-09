import React from 'react';
import styled from 'styled-components';

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.7);
  left: 0;
  top: 0;
  z-index: 999;
`;

const Backdrop = props => <Background className="backdrop"></Background>;

export default Backdrop;
