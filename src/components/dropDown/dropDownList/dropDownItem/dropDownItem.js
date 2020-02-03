import React from 'react';



const DropDownItem = props => {

   const itemStyle = ["dropdown-list__item"];

   if (props.opList.added){
       itemStyle.push('active-op')
   }

  

return (

       <li className = {itemStyle.join(" ")} onClick = {() => {props.funcAdd(props.opList) } }> 
           <img 
           src={window.location.origin + props.icon}
           className = "dropdown-list__img"
           alt ={props.name}
           ></img>
       <span className = "dropdown-list__name">{props.name}</span>
       </li>
    )


}


export default DropDownItem;