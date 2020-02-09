import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import OperatorList from '../../components/operatorList/operatorList';
import StepList from '../../components/stepList/stepList';
import PaymentForm from '../../components/PaymentForm/paymentform';
import Dropdown from '../../components/dropDown/dropdown';
import Backdrop from '../../components/backdrop/backdrop';
import { Form } from '../../components/PaymentForm/styledForm';

const Payment = () => {
  const [operatorID, setOperator] = useState(null);

  const [operators, setOperators] = useState([
    { name: 'МТС', img: '/img/mts.jpg', added: true, icon: '/img/icons/mts_icon.png', id: 0 },
    {
      name: 'Билайн',
      img: '/img/beeline.jpg',
      added: true,
      icon: '/img/icons/beeline_icon.png',
      id: 1,
    },
    {
      name: 'Мегафон',
      img: '/img/megaphon.jpg',
      added: true,
      icon: '/img/icons/megafon__icon.png',
      id: 2,
    },
    {
      name: 'ТЕЛЕ 2',
      img: '/img/tele2.jpg',
      added: false,
      icon: '/img/icons/tele2_icon.png',
      id: 3,
    },
    { name: 'Yota', img: '/img/yota.jpg', added: false, icon: '/img/icons/yota_icon.png', id: 4 },
  ]);

  const [steps, setSteps] = useState([
    { step: 1, active: true },
    { step: 2, active: false },
    { step: 3, active: false },
  ]);

  function secondStep() {
    setSteps(steps =>
      steps.map((item, index) =>
        index <= 1 ? { step: item.step, active: true } : { step: item.step, active: false },
      ),
    );
  }

  function lastStep() {
    setSteps(steps => steps.map(item => ({ ...item, active: true })));
  }

  function returnMainPage() {
    setSteps(steps =>
      steps.map((item, index) =>
        index == 0 ? { step: item.step, active: true } : { step: item.step, active: false },
      ),
    );
  }

  function onSelectOperator(op) {
    let name = op.name;

    secondStep();

    setOperator(name);
  }

  function addOperator(operator) {
    const newOperators = [...operators];
    const indx = operator.id;

    if (operator.name === 'ТЕЛЕ 2' || operator.name === 'Yota') {
      newOperators[indx].added
        ? (newOperators[indx] = { ...newOperators[indx], added: false })
        : (newOperators[indx] = { ...newOperators[indx], added: true });
    }

    setOperators(newOperators);
  }

  return (
    <React.Fragment>
      {steps[2].active === true ? <Backdrop /> : null}

      <div className="header">
        <StepList steps={steps} />

        <Dropdown funcAdd={addOperator} opList={operators} />
      </div>

      {!steps[1].active || !steps[2].active ? (
        <React.Fragment>
          <p className="App-text">Для оплаты</p>
          <h1 className="App-title">Выберите оператора</h1>
        </React.Fragment>
      ) : null}

      <Form>
        <Route
          path="/form/:operatorID"
          render={({ match }) => {
            const { operatorID } = match.params;
            return (
              <PaymentForm
                itemId={operatorID}
                items={operators}
                step={steps}
                return={returnMainPage}
                success={lastStep}
                secondStep={secondStep}
              />
            );
          }}
        ></Route>
      </Form>
      <div className="operator">
        <OperatorList operator={operators} onSelectOp={onSelectOperator} />
      </div>
    </React.Fragment>
  );
};

export default Payment;
