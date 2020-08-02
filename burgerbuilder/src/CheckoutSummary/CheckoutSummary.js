import React from 'react';
import Burger from '../Burger/Burger';
import Button from '../UI/Button/Button';
import classes from './CheckoutSummary.module.css';


const CheckoutSummary = ((props)=>
{
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well</h1>
            <div style={{width:'100%' , margin:'auto'}}>
                <Burger ingredient={props.ingredient} price={props.price}></Burger>
            </div>
            <Button btnType="Danger" clicked ={props.cancelClicked}>Cancel</Button>
            <Button btnType="Success" clicked ={props.continueClicked}>Continue</Button>

        </div>
    );
}

)

export default CheckoutSummary;