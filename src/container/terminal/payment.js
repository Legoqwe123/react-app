import React from 'react';
import { Component } from "react";
import OperatorList from '../../components/operatorList/operatorList';
import StepList from '../../components/stepList/stepList'
import PaymentForm from '../../components/PaymentForm/paymentform';


class Payment extends Component {
    
    state = {
        operators: [
          { name: "Mts", API : "apiMts" , img : '/img/mts.jpg', select: true},
          { name: "Beeline", API : "apiBeeline" , img : '/img/beeline.jpg', select: true},
          { name: "Megafon", API : "apiMegafon" , img : '/img/megaphon.jpg', select: true}
        ]  , 
       
        steps: [
        
            { step: 1, active: true },
            { step: 2, active: false  }, 
            { step: 3, active: false  }
         ]
    
    }

   

    secondStep = () => {
        
        let steps = [...this.state.steps];
        
        steps[1].active = true;
    
        this.setState({
            steps
        })

    }
   
   render() {

    const operators = this.state.operators;
    const steps = this.state.steps;

    return (
         <React.Fragment>
            
             <div className = "step">
               
               <StepList 
                 steps = {steps} 
               /> 
             
             </div>

             <p className="App-text">Для оплаты</p>
             <h1 className="App-title">Выберите оператора</h1>

          
                <PaymentForm 
                
                 status = {this.state.steps[1].active}

                /> 
             
            
           
 
             
             <div className = "operator">
                
                 <OperatorList 
                   nextStep = { this.secondStep }
                   operator = {operators}
                 />
            
             </div>
            
             
             
        
        </React.Fragment>
            
        )
    }

}

export default Payment