import React from 'react';
import { ListItem } from '../stepListStyled';

const stepItem = props => {
  return <ListItem steps={props.active}>{props.step}</ListItem>;
};

export default stepItem;
