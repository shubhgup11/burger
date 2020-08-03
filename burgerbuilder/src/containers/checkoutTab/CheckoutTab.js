import React ,{Component} from 'react';
import CheckoutSummary from '../../CheckoutSummary/CheckoutSummary';
import ContactData from '../../components/ContactData/ContactData';
import {Route} from 'react-router-dom';


class CheckoutTab extends Component
{
    state={
        ingredient:{salad:0,
            bacon:2,
            cheese:0,
            meat:0},
        totalPrice:0,
    };


    cancelClickHandler = ()=>
    {
        this.props.history.goBack();
        // console.log("cancelClicked");
    }
    continueClickHandler=()=>
    {
        // console.log(this.props);
        // console.log("form tp be displayed");
        this.props.history.push("/checkout/form");
    }
    componentDidMount()
    {
        // console.log(this.props);
        const query=new URLSearchParams(this.props.location.search)
        // console.log(query);
        const ingredient={}
        let totalPrice=0;
        totalPrice=+query.get('price');
        for(let p of query)
        {
            // console.log(p);
            if(p[0]==='price')
                break;
            ingredient[p[0]]=+p[1];
            
        }
        // console.log(ingredient);
        this.setState({ingredient:ingredient,
                        totalPrice:totalPrice},()=>{
                            // console.log(this.state.ingredient);
                            // console.log(this.state.totalPrice);
                        });
        // console.log(this.state);
        
    }
    render(){
        return(
        <div>
            <CheckoutSummary ingredient={this.state.ingredient} price={this.state.totalPrice}
            cancelClicked={this.cancelClickHandler}
            continueClicked={this.continueClickHandler}></CheckoutSummary>
            <Route path="/checkout/form" render={()=>{
                return(
                <ContactData ingredient={this.state.ingredient} price={this.state.totalPrice}/>);
            }}>

            </Route>
        </div>
        );
    }
}


export default CheckoutTab;