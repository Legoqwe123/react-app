import React from 'react';
import  './form.scss';
import BtnExit from '../UI/btnExit/btnExit';
import FormInput from '../UI/input/input';
import StatusOperation from '../statusOperation/statusOperation';
import { Transition } from 'react-transition-group';


class PaymentForm extends React.Component {

   state = {

    sendStatus : [
      
      { status: true , msg: "Операция прошла успешно"},
     
      { status: false , msg: "Произошла ошибка, попробуйте еще раз" }
   
    ] ,

   formControls: {
      phone: {
          value: '',
          errorMessage: "Введите корректный номер телефона",
          type: "tel",
          mask:"+8\(999)-999-99-99",
          maskChar: '_',
          placeholder: "Номер телефона",
        },
        
        cost: {
          value: '',
          errorMessage: "Введите сумму от 1 до 1000 рублей",
          type: "text",
          placeholder: "Введите сумму от 1 до 1000 рублей",
          mask:"9999",
          maskChar: null,
        }
   }
  }



clearInputs = () => {
   
  const formControls = {...this.state.formControls};
  const keyForms =  Object.keys(formControls);
  
  keyForms.map(item  => {
     
    formControls[item].value = ""
  
 })

 this.setState({
  formControls
 })

}


submitHandler = event => {
  
  event.preventDefault();
 
  const formControls = {...this.state.formControls};
  const keyForms =  Object.keys(formControls);

  keyForms.map(item  => {
    
     formControls[item] === this.state.formControls.phone
    
      ? this.validatePhone(formControls[item], 11) 
      : this.validateCost(formControls[item], 1000)
    
  })

  if (formControls.phone.validate === true && formControls.cost.validate === true){
      this.props.success();
      this.clearInputs();
    }

this.setState({
    formControls
  })

}

getRandomFloat(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

validatePhone(inputValue, valid) {

 const value = inputValue.value.split(/[^0-9,]/).join('').trim();
  
  
 if (value.length === valid){
    inputValue.validate = true;
  } else {
    inputValue.validate = false;
  }
  
}

validateCost(inputValue, valid){
  
  const value = inputValue.value.split(/[^0-9,]/).join('').trim();

  if (value >=1 && value <= valid ){
    inputValue.validate = true;
  } else {
    inputValue.validate = false;
  }

}

onChange = (event,name) => {
  
  const formControls = {...this.state.formControls};
  const control = {...formControls[name]};
  control.value  = event.target.value;
  formControls[name] = control
  
  this.setState({
    formControls
  })

}

  renderInputs(){
    
    
     return Object.keys(this.state.formControls).map((controlName, index) => {
      
      const control = this.state.formControls[controlName]
      
      return(
         <FormInput
          
          key = {controlName + index}
          type = {control.type}
          value = {control.value}
          valid = {control.validate}
          errMsg = {control.errorMessage}
          shouldValidate = {control.validation}
          placeholder = {control.placeholder}
          mask = {control.mask}
          mskChar = {control.maskChar}
          onChangs = { event => this.onChange(event,controlName)}
         
          />
       )
  
  
   
      });
 
  }
  
render() {

  
const sendStatusRandom = this.state.sendStatus[this.getRandomFloat(0,2)]
  
  return (


    <React.Fragment>
     
      <StatusOperation 
         secondStep = {this.props.secondStep}
         returnMain = {this.props.return}
         steps = {this.props.steps}
         status = {sendStatusRandom}
       />

      
      <Transition
        in={this.props.steps[1].active}
        timeout={600}
      >

        {state =>
          <form className={`payment-form ${state}`} onSubmit={this.submitHandler}>

          <BtnExit return={this.props.return} />
        
            <img src={this.props.steps[1].active ? process.env.PUBLIC_URL + this.props.select[0].img : null} className="payment-form__img"></img>
          
            <div className="payment-form__title">Пополнение баланса</div>
            
            {this.renderInputs()}
            
            
           <button type="submit" className="payment-form__button">ОПЛАТИТЬ</button>
          </form>

          
        }
        

       </Transition>
      </React.Fragment>
     )
   
  }




}

export default PaymentForm