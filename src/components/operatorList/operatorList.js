import React from 'react';
import OperatorItem from '../operatorList/operatorItem/operatorItem';
import  './operatorList.scss';


const OperatorList = props => {

   
    return (

    <ul className='operator-list'>
            {props.operator.map((item, index) => {

                return (

                    <OperatorItem
                    
                        key={index}
                        operator= {item}
                        name={item.name}
                        src={item.img}
                        onSelect = {props.onSelectOp}

                   
                     />

                )

            })}
        </ul>
    )


}


export default OperatorList;