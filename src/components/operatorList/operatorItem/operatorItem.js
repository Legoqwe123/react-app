import React from 'react';
import  './operatorItem.scss';



const OperatorItem = props => {

   

    return( 
        <div className = "operator-list__item" onClick = {props.nextStep}>

        <img className = 'operator-list__image' alt ={props.name} src={window.location.origin + props.src}></img>
   
         </div>
    
    )
    
}
     
    
      



export default OperatorItem