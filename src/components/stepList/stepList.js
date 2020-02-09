import React from 'react';
import StepItem from './stepItem/stepItem';
import { ListStyle } from './stepListStyled';

const StepList = props => (
  <ListStyle>
    {props.steps.map((item, index) => {
      return <StepItem key={index} active={item.active} step={item.step} />;
    })}
  </ListStyle>
);

export default StepList;
