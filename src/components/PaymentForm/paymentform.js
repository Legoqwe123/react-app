import React, { useState } from 'react';
import BtnExit from '../UI/btnExit/btnExit';
import FormInput from '../UI/input/input';
import StatusOperation from '../statusOperation/statusOperation';
import { FormTitle } from './styledForm';

const PaymentForm = props => {
  const sendStatus = [
    { status: true, msg: 'Операция прошла успешно' },

    { status: false, msg: 'Произошла ошибка, попробуйте еще раз' },
  ];

  const [formControls, setFormContorls] = useState({
    phone: {
      value: '',
      errorMessage: 'Введите корректный номер телефона',
      type: 'tel',
      mask: '+8(999)-999-99-99',
      maskChar: '_',
      placeholder: 'Номер телефона',
    },

    cost: {
      value: '',
      errorMessage: 'Введите сумму от 1 до 1000 рублей',
      type: 'text',
      placeholder: 'Введите сумму от 1 до 1000 рублей',
      mask: '9999',
      maskChar: null,
    },
  });

  const copyFormControls = { ...formControls };

  function clearInputs() {
    const keyForms = Object.keys(copyFormControls);

    keyForms.map(item => {
      copyFormControls[item].value = '';
    });

    setFormContorls({
      copyFormControls,
    });
  }

  function submitHandler(event) {
    event.preventDefault();

    const keyForms = Object.keys(copyFormControls);

    keyForms.map(item => {
      copyFormControls[item] === copyFormControls.phone
        ? validatePhone(copyFormControls[item], 11)
        : validateCost(copyFormControls[item], 1000);
    });

    if (formControls.phone.validate === true && formControls.cost.validate === true) {
      props.success();
      clearInputs();
    }

    setFormContorls({ ...copyFormControls });
  }

  function getRandomFloat(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  function validatePhone(inputValue, valid) {
    const value = inputValue.value
      .split(/[^0-9,]/)
      .join('')
      .trim();

    if (value.length === valid) {
      inputValue.validate = true;
    } else {
      inputValue.validate = false;
    }
  }

  function validateCost(inputValue, valid) {
    const value = inputValue.value
      .split(/[^0-9,]/)
      .join('')
      .trim();

    if (value >= 1 && value <= valid) {
      inputValue.validate = true;
    } else {
      inputValue.validate = false;
    }
  }

  function onChange(event, name) {
    const control = { ...copyFormControls[name] };
    control.value = event.target.value;
    copyFormControls[name] = control;

    setFormContorls({ ...copyFormControls });
  }

  function renderInputs() {
    return Object.keys(formControls).map((controlName, index) => {
      const control = formControls[controlName];

      return (
        <FormInput
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.validate}
          errMsg={control.errorMessage}
          shouldValidate={control.validation}
          placeholder={control.placeholder}
          mask={control.mask}
          mskChar={control.maskChar}
          onChangs={event => onChange(event, controlName)}
        />
      );
    });
  }

  const sendStatusRandom = sendStatus[getRandomFloat(0, 2)];
  const select = props.items.filter(item => item.name === props.itemId);
  const [item] = select;

  return (
    <React.Fragment>
      <StatusOperation
        secondStep={props.secondStep}
        returnMain={props.return}
        steps={props.step}
        status={sendStatusRandom}
      />

      <form className={`payment-form`} onSubmit={submitHandler}>
        <BtnExit return={props.return} />

        <img src={process.env.PUBLIC_URL + item.img} className="payment-form__img"></img>

        <FormTitle>Пополнение баланса</FormTitle>

        {renderInputs()}

        <button type="submit" className="payment-form__button">
          ОПЛАТИТЬ
        </button>
      </form>
    </React.Fragment>
  );
};

export default PaymentForm;
