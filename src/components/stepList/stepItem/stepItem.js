import React from 'react';

const stepItem = props => {
   
  
  const divStyle = ['step-list__item'];
  
  if (props.active === true){
    divStyle.push('step-active')
  } 
   
   
  return (
      <div className = {divStyle.join(' ')}>{props.step}</div>
   )
  
}

export default stepItem