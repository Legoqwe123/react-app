import React from 'react';
import  './form.scss';

const PaymentForm = props => (

  props.status
  ?  <div className="form-wrapper">
     <form className = "payment-form" action = '#'>
        <div className = "payment-form__title">Пополнение баланса</div>
       <input type='text' className = "payment-form__phone" placeholder = "Телефон"></input>
       <input type='text' className = "payment-form__phone" placeholder = "Сумма"></input>
       <button type="submit" className = "payment-form__button">ОПЛАТИТЬ</button>
    </form>
    </div>
 
 : null  

)

export default PaymentForm