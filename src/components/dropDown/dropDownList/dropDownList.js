import React from 'react';
import DropDownItem from '../dropDownList/dropDownItem/dropDownItem';



const DropDownList = props => {
   
   
    return (

       
       <ul className={`dropdown-list ${props.class}`}>
            
            {props.oplist.map((item, index) => {

                return (

                   <DropDownItem 

                     key = {index}
                     icon ={item.icon}
                     name = {item.name}
                     funcAdd = {props.funcAdd}
                     opList ={item}
                    />

                )

            })}
        </ul>
    )


}


export default DropDownList;