import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BtnExit = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  right: 30px;
  top: 30px;
  cursor: pointer;
  span {
    position: relative;
    &:before {
      content: '';
      position: absolute;
      height: 3px;
      width: 20px;
      background: #6916a1;
      transform: rotate(45deg);
      top: 13px;
      left: 5px;
    }
    &:after {
      content: '';
      position: absolute;
      height: 3px;
      width: 20px;
      background: #6916a1;
      transform: rotate(-45deg);
      top: 13px;
      left: 5px;
    }
  }
`;

export default props => (
  <Link to="/" onClick={props.return}>
    <BtnExit>
      <span></span>
    </BtnExit>
  </Link>
);
