import React from 'react';
import classes from './NavigationItems.module.css';
import Navigationitem from './NavigationItem/NavigationItem';

const NavigationItems=(props)=>
{
    return (
        <ul className={classes.NavigationItems}>
        <Navigationitem link="/" >BurgerBuilder</Navigationitem>
        <Navigationitem link="/orders">Orders</Navigationitem>
        </ul>
    );
}

export default NavigationItems;