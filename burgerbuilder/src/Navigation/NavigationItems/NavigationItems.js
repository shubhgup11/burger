import React from 'react';
import classes from './NavigationItems.module.css';
import Navigationitem from './NavigationItem/NavigationItem';

const NavigationItems=(props)=>
{
    return (
        <ul className={classes.NavigationItems}>
        <Navigationitem link="./" active>BurgerBuilder</Navigationitem>
        <Navigationitem link="./">Checkout</Navigationitem>
        </ul>
    );
}

export default NavigationItems;