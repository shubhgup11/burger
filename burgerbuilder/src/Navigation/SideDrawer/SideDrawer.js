import React, { useState } from 'react';
import classes from './SideDrawer.module.css';
import burgerImage from '../../../src/Assets/Images/burger-logo.png'
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../Burger/Backdrop/Backdrop';


const SideDrawer=(props)=>
{

 
    const [backdropshow,backdropHandler]=useState(false);
 let SideDropClass=[classes.SideDrawer,classes.Close];

    console.log("sidedrawer");
     if(props.open)
    {
        SideDropClass=[classes.SideDrawer,classes.Open];
        if(!backdropshow)
        {
            
            backdropHandler(true);
        }
    }


const BackDropClick=()=>
{
    props.sideDropClose();
    backdropHandler(!backdropshow);
}
 


    return(
        <React.Fragment>
        <Backdrop clicked={()=>BackDropClick()} show={backdropshow}></Backdrop>
        <div className={SideDropClass.join(' ')}>
            <div className={classes.Logo}>
                <img src={burgerImage} alt="burgerImage"></img>
            </div>
            <nav>
            <NavigationItems></NavigationItems>
            </nav>
        </div>
        </React.Fragment>
    )
}
export default SideDrawer;