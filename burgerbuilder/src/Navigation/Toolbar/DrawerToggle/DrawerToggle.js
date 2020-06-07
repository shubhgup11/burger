import React from 'react';
import classes from './DrawerToggle.module.css';


const DrawerToggle=(props)=>
{
    return (
        <div class={classes.DrawerToggle} onClick={props.ToggleCLickHandler}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export default DrawerToggle;


