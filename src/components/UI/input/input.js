import React from 'react';
import InputMask from 'react-input-mask';
import styled from 'styled-components';

const Inputs = styled.div`
  position: relative;
  input {
    margin-top: 15px;
    border-radius: 10px;
    padding: 13px 20px;
    width: 370px;
    border: ${props =>
      props.valid == false ? '1px solid #F95D51' : '1px solid rgba(0, 0, 0, 0.12)'};
    @media (max-width: 495px) {
      font-size: 12.5px;
      width: 250px;
    }
  }
`;
const ErrMsg = styled.span`
    position: absolute;
    padding: 6px;
    top: 10px;
    margin-left: 10px;
    background: #F95D51;
    color: #fff;
    min-width: 225px;
    &:after {
        content: "";
        position: absolute;
        width: 10px;
        height: 10px;
        background: #F95D51;
        display: inline-block;
        top: 40%;
        left: -5px;
        transform: rotate(45deg);
        
    }
    @media( max-width: 885px){
       position: relative !important;
       display: block;
       margin-left: 0px !important;
          &:after {
            top: -9% !important;
            left: 14px !important; 
          }
   } 
    @media( max-width: 495px) {
      font-size: 12.5px;
      width: 250px;
    }
    

}
`;

const InputForm = props => {
  return (
    <Inputs valid={props.valid}>
      <InputMask
        type={props.type}
        placeholder={props.placeholder}
        mask={props.mask}
        maskChar={props.mskChar}
        onChange={event => props.onChangs(event, props.controlName)}
        value={props.value}
      />
      {props.valid === false ? <ErrMsg>{props.errMsg}</ErrMsg> : null}
    </Inputs>
  );
};

export default InputForm;
