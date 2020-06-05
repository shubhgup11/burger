import React from 'react';
import classes from './BuildControl.module.css';


const BuildControl = (props) =>
{
    return (
        <div className={classes.BuildControl}>
            <div className={classes.Label}>{props.ingredient}</div>
            <button className={classes.Less} onClick={props.decrease} disabled={props.disable}>Less</button>
            <button className={classes.More} onClick={props.increase}>More</button>
        </div>
    )
}

export default BuildControl;