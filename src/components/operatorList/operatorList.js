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
                        name={item.name}
                        src={item.img}
                        nextStep={props.nextStep}

                    />

                )

            })}
        </ul>
    )


}


export default OperatorList;