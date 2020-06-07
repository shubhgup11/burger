import React from 'react';
import classes from './modal.module.css';
// import {Button} from 'reactstrap'


const Modal=(props)=>
{
    const ListJSX=Object.keys(props.ingredients).map(
        (igKey)=>{
            
            return(
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}:{props.ingredients[igKey]}</span>
                
            </li>
            );
        }
    );



    return(
        <div className={classes.Modal}>
            <h3>Order Summary</h3>
            <p>Burger has the following ingredient</p>
            {ListJSX}
            <p>Total Price is : {props.price}</p>
            <p>Are you sure you want to checkout</p>
            <button  className={[classes.Button,classes.Danger].join(" ") } onClick={props.DangerClick}>Cancel</button>
            <button className={[classes.Button,classes.Success].join(" ")} onClick={props.SuccessClick}>Order Now  </button>
            
        </div>
    )
}
export default Modal;