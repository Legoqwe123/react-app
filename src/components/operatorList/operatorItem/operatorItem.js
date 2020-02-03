import React from 'react';
import { Transition } from 'react-transition-group';


const OperatorItem = props => {
 
   
 return( 
       
  
  <Transition
        in = {props.operator.added}
        timeout = {600}
        unmountOnExit
        
       >
   
       {state => <div 
          className = {`operator-list__item ${state}`}
          onClick = {()=> props.onSelect(props.operator)}
         
         > 
     
        <img 
        
          className = 'operator-list__image' 
          alt ={props.name} 
          src={window.location.origin + props.src}>

       </img> 
         </div>}
       
       </Transition>
     
       
    )
    
    
}
     
    
      



export default OperatorItem