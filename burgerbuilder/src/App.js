import React,{Component} from 'react';
import {Route} from 'react-router-dom';


// import classes from './App.module.css';
import Layout from './components/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import CheckoutTab from './containers/checkoutTab/CheckoutTab';
import Orders from './Orders/Orders';

class App extends Component
{
  render()
  {
      return (
        
          <Layout>
             
            <Route path='/checkout' component={CheckoutTab}/> 
            <Route path="/" exact component={BurgerBuilder}/>
            <Route path="/orders" component={Orders}></Route>
          {/* <BurgerBuilder/>
          <CheckoutTab></CheckoutTab> */}
          </Layout>
        
      );
 }
}

export default App;
