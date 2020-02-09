import React from 'react';
import OperatorItem from '../operatorList/operatorItem/operatorItem';
import { List } from './styledOperator';

const OperatorList = props => {
  return (
    <List className="operator-list">
      {props.operator.map((item, index) => {
        return (
          <OperatorItem
            key={index}
            operator={item}
            name={item.name}
            src={item.img}
            onSelect={props.onSelectOp}
          />
        );
      })}
    </List>
  );
};

export default OperatorList;
