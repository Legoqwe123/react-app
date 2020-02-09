import React from 'react';
import { Transition } from 'react-transition-group';
import ScrollIntoView from 'react-scroll-into-view';
import { Item } from '../styledOperator';
import { Link } from 'react-router-dom';

const OperatorItem = props => {
  return (
    <Transition in={props.operator.added} timeout={600} unmountOnExit>
      {state => (
        <ScrollIntoView selector="#root">
          <Link to={`/form/${props.name}`} className={`operator-list__link`}>
            <Item
              className={`operator-list__item ${state}`}
              onClick={() => props.onSelect(props.operator)}
            >
              <img
                className="operator-list__image"
                alt={props.name}
                src={process.env.PUBLIC_URL + props.src}
              ></img>
            </Item>
          </Link>
        </ScrollIntoView>
      )}
    </Transition>
  );
};

export default OperatorItem;
