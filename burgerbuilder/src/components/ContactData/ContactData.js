import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import classes from './ContactData.module.css';
import axios from'axios';
import LoadSpinner from '../../LoadSpinner/LoadSpinner';

class ContactData extends Component
{
    state={
        name:'',
        email:'',
        address:{
            street:'',
            postalcode:''
        },
        loading:false
    };

    formClickHandler = (event)=>
    {
        event.preventDefault();
        console.log("hey");
        this.setState({loading:true});
        let order={
            ingredient:this.props.ingredient,
            price:this.props.price,name:'SG',
            address:'address1',
            deliverymethod:'1day'

        };

        axios.post('/orders.json',order).then(
            (response)=>{
                console.log(response);
                this.setState((prevState,props)=>
                {
                    return {loading:false};
                });
            }
        ).catch((error)=>{
            console.log(error);
            this.setState((prevState,props)=>
                {
                    return {loading:false};
                });
        });
    }
    
    

    render()
    {
        let formJSX=null;
        if(this.state.loading)
        {
            formJSX=<LoadSpinner></LoadSpinner>
        }
        else
        {
        formJSX = (<form>
                <input className={classes.Input} type="text" name="name" placeholder="Your name"></input>
                <input className={classes.Input} type="email" name="email" placeholder="Your email"></input>
                <input className={classes.Input} type="text"  name="street" placeholder="Your street"></input>
                <input className={classes.Input} type="text" name="Postal Code" placeholder="postal code"></input>
                <Button btnType="Success" clicked={this.formClickHandler}>Submit</Button>
            </form>);
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {formJSX}
            </div>
        )
    }
}

export default ContactData;