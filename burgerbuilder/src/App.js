import React,{Component} from 'react';

// import classes from './App.module.css';
import Layout from './components/Layout/layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component
{
  render()
  {
      return (
        <Layout>
        <BurgerBuilder/>
        </Layout>
      );
 }
}

export default App;
