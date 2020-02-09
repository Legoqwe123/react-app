import React from 'react';
import { DropdownImg, DropdownName, DropdownItem } from '../../styledDropdown';

const DropDownItem = props => {
  const itemStyle = ['dropdown-list__item'];

  if (props.opList.added) {
    itemStyle.push('active-op');
  }

  return (
    <DropdownItem
      className={itemStyle.join(' ')}
      listAdd={props.opList.added}
      onClick={() => {
        props.funcAdd(props.opList);
      }}
    >
      <DropdownImg
        src={process.env.PUBLIC_URL + props.icon}
        className="dropdown-list__img"
        alt={props.name}
      ></DropdownImg>
      <DropdownName className="dropdown-list__name">{props.name}</DropdownName>
    </DropdownItem>
  );
};

export default DropDownItem;
