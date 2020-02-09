import React from 'react';
import DropDownItem from '../dropDownList/dropDownItem/dropDownItem';
import { DropdownList } from '../styledDropdown';

const DropDownList = props => {
  return (
    <DropdownList className={`${props.class}`}>
      {props.oplist.map((item, index) => {
        return (
          <DropDownItem
            key={index}
            icon={item.icon}
            name={item.name}
            funcAdd={props.funcAdd}
            opList={item}
          />
        );
      })}
    </DropdownList>
  );
};

export default DropDownList;
