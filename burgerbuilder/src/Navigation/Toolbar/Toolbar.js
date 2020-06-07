import React from 'react';
import classes from './toolbar.module.css';
import burgerImage from '../../../src/Assets/Images/burger-logo.png'
import Navigationitems from '../NavigationItems/NavigationItems';
import DrawerToggle from './DrawerToggle/DrawerToggle';
const  Toolbar=(props)=>
{


    return(
        <header className={classes.Toolbar}>
            <DrawerToggle ToggleCLickHandler={props.clickMenu}></DrawerToggle>
            <div className={classes.Logo} >
                <img src={burgerImage}alt="burgerImage"></img>
            </div>
            <nav className={classes.DesktopOnly}>
            <Navigationitems  ></Navigationitems>
            </nav>
        </header>
        
    );
}

export default Toolbar;