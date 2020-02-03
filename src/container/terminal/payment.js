import React from 'react';
import { Component } from "react";
import OperatorList from '../../components/operatorList/operatorList';
import StepList from '../../components/stepList/stepList'
import PaymentForm from '../../components/PaymentForm/paymentform';
import Dropdown from '../../components/dropDown/dropdown';
import Backdrop from '../../components/backdrop/backdrop';


class Payment extends Component {


  state = {

    operators: [
      { name: "МТС",  img: '/img/mts.jpg', added: true, icon: '/img/icons/mts_icon.png' },
      { name: "Билайн",  img: '/img/beeline.jpg', added: true , icon: '/img/icons/beeline_icon.png' },
      { name: "Мегафон",  img: '/img/megaphon.jpg', added: true , icon: '/img/icons/megafon__icon.png' },
      { name: "ТЕЛЕ 2",  img: '/img/tele2.jpg', added: false , icon: '/img/icons/tele2_icon.png' },
      { name: "Yota",  img: '/img/yota.jpg', added: false , icon: '/img/icons/yota_icon.png' }
    ],

    steps: [

      { step: 1, active: true },
      { step: 2, active: false },
      { step: 3, active: false }

    ]

  }

  secondStep = () => {

    const steps = this.state.steps;

    steps[1].active = true;
    steps[2].active = false

    this.setState({
      steps
    })

  }

  lastStep = () => {
    const steps = this.state.steps;

    steps[2].active = true;

    this.setState({
      steps
    })
  }

  returnMainPage = () => {

    this.setState({
      steps: [
        { step: 1, active: true },
        { step: 2, active: false },
        { step: 3, active: false }
      ]

    })

  }

  onSelectOperator = op => {

    const name = op.name;

    this.secondStep();

    this.setState({
      active: name
    })

  }

  addOperator = operator => {
    
    const stateAdd = operator;

    if (operator.name === "ТЕЛЕ 2" || operator.name === "Yota"){
      stateAdd.added ? stateAdd.added = false : stateAdd.added = true
    }
    
    this.setState({
      operator: stateAdd
    })
     
  }

  render() {

    const operators = this.state.operators;
    const selectOp = operators.filter(item => item.name === this.state.active);

  return (
      
      
    <React.Fragment>
  
       {
       
       this.state.steps[2].active === true 
       ? <Backdrop/>
       : null
       
       }

        <div className="header">

        <StepList
            steps={this.state.steps}
          />

          <Dropdown 
            funcAdd = {this.addOperator}
            opList = {operators}
             />

        </div>


        {(this.state.steps[1].active || this.state.steps[2].active)

          ? null

          : <React.Fragment>
            <p className="App-text">Для оплаты</p>
            <h1 className="App-title">Выберите оператора</h1>
           </React.Fragment>

        }




        <div className="form-wrapper">

            
              <PaymentForm
                return={this.returnMainPage}
                steps={this.state.steps}
                select={selectOp}
                success = {this.lastStep}
                secondStep = {this.secondStep}
              />
             

        </div>

        <div className="operator">

          <OperatorList
            operator={operators}
            onSelectOp={this.onSelectOperator}
          />


        </div>
      </React.Fragment>

    )
  }

}

export default Payment