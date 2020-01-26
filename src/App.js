import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import Payment from './container/terminal/payment'





class App extends Component {


  render(){
    return(
      
      <Layout>
        
      
       <Payment />
       
           
      </Layout>
    )
  }

}

export default App;
