import React from 'react';
import StepItem from './stepItem/stepItem';
import  './stepList.scss';


const StepList = props => ( 

     
     
      <ul className='step-list'>
       {
           props.steps.map((item,index) => {
               
               return(
                    
                    <StepItem
   
                     key = {index}
                     active = {item.active}
                     step = {item.step}
                    
                    />
               )
           })
       }
      </ul>

     

   
)


export default StepList