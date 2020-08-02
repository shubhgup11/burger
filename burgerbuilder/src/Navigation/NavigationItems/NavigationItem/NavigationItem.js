import React from 'react';
import classes from './NavigationItem.module.css';
import {NavLink} from 'react-router-dom';


const Navigationitem=(props)=>
{
    console.log(props.active);
    return (
        <li className={classes.Navigationitem}>
            <NavLink to={props.link} exact activeClassName={classes.active} >{props.children}</NavLink>
        </li>
    );
}

export default Navigationitem;