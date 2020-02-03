import React from 'react';
import InputMask from 'react-input-mask';




const InputForm = props => {

    const errClass = [];

    if (props.valid === false){
        errClass.push('err')
    }

   
   return( 
        
     <div className="input-wrap">
    
     <InputMask 
        className = {errClass.join(' ')}
        type = {props.type} 
        placeholder= {props.placeholder} 
        mask = {props.mask} 
        maskChar = {props.mskChar} 
        onChange = { event => props.onChangs(event,props.controlName)} 
        value = {props.value}
      />
     
     {props.valid === false ? 
      <span className="err-message">{props.errMsg}</span>
      : null
    }
   

    </div>
     
   )
}

export default InputForm