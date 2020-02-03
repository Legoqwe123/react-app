import React from 'react';
import { Transition } from 'react-transition-group';
import { Link, animateScroll as scroll } from "react-scroll";


const OperatorItem = props => {
 
  
  return( 
       
  
  <Transition
        in = {props.operator.added}
        timeout = {600}
        unmountOnExit
        
       >
   
       {state => <Link 
           activeClass="active"
           to="root"
           spy={true}
           smooth={true}
           duration= {600}
           className = {`operator-list__item ${state}`}
           onClick = {()=> props.onSelect(props.operator)}
           
         > 
     
        <img 
        
          className = 'operator-list__image' 
          alt ={props.name} 
          src= {process.env.PUBLIC_URL + props.src}>

       </img> 
         </Link >}
       
       </Transition>
     
       
    )
    
    
}
     
    
      



export default OperatorItem