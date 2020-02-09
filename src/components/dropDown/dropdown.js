import React, { useState } from 'react';
import DropdownList from '../dropDown/dropDownList/dropDownList';
import { Transition } from 'react-transition-group';
import { DropdownStyled, DropdownTitle } from './styledDropdown';

const Dropdown = props => {
  const [dropdown, toggleDropdown] = useState(false);

  return (
    <DropdownStyled>
      <DropdownTitle dropdown={dropdown} onClick={() => toggleDropdown(!dropdown)}>
        Список операторов
        <svg
          width="18"
          height="9"
          viewBox="0 0 18 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.98588 8.99696C8.686 8.99755 8.39537 8.89297 8.16446 8.7014L0.463656 2.27615C0.20155 2.05803 0.0367216 1.74459 0.005431 1.40479C-0.0258596 1.06498 0.0789508 0.726655 0.296805 0.464227C0.514659 0.201798 0.827711 0.0367669 1.16709 0.00543771C1.50648 -0.0258915 1.84439 0.0790476 2.10649 0.29717L8.98588 6.05419L15.8653 0.502779C15.9966 0.396035 16.1476 0.316321 16.3098 0.26822C16.4719 0.220118 16.642 0.204577 16.8101 0.222489C16.9783 0.240402 17.1413 0.291414 17.2897 0.372596C17.4381 0.453777 17.569 0.563527 17.675 0.695536C17.7925 0.827667 17.8815 0.982678 17.9364 1.15086C17.9914 1.31904 18.011 1.49676 17.9941 1.67289C17.9773 1.84903 17.9243 2.01977 17.8384 2.17444C17.7526 2.3291 17.6358 2.46435 17.4953 2.57171L9.79447 8.7785C9.55692 8.9398 9.27223 9.01671 8.98588 8.99696Z"
            fill="#6916A1"
          />
        </svg>
      </DropdownTitle>

      <Transition in={dropdown} timeout={600} unmountOnExit>
        {state => <DropdownList oplist={props.opList} class={state} funcAdd={props.funcAdd} />}
      </Transition>
    </DropdownStyled>
  );
};

export default Dropdown;
