import React from 'react';
import classes from './modal.module.css';
import LoadSpinner from '../LoadSpinner/LoadSpinner';
// import {Button} from 'reactstrap'
import Button from '../UI/Button/Button';


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
    let modalJSX=null;
    if(props.showLoader)
    {
        modalJSX=<LoadSpinner></LoadSpinner>;
    }
    else
    {
        modalJSX=
        <React.Fragment>
            <h3>Order Summary</h3>
            <p>Burger has the following ingredient</p>
            {ListJSX}
            <p>Total Price is : {props.price}</p>
            <p>Are you sure you want to checkout</p>
            {/* <button  className={[classes.Button,classes.Danger].join(" ") } onClick={props.DangerClick}>Cancel</button>
            <button className={[classes.Button,classes.Success].join(" ")} onClick={props.SuccessClick}>Order Now  </button> */}
            <Button btnType="Danger" clicked={props.DangerClick}>Cancel</Button>
            <Button btnType="Success" clicked={props.SuccessClick}>Order Now</Button>
            
        </React.Fragment>;
    }




    return(
        <div className={classes.Modal}>
           {modalJSX}
            
        </div>
    )
}
export default Modal;