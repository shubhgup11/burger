import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.css';

const BuildControls = (props)=>
{
    const ingredientList=Object.keys(props.ingredients);
    // console.log(ingredientList);
    let count=0;
    // console.log(count);
    ingredientList.forEach((ingre)=>{
        // console.log(ingre);
        count=count+props.ingredients[ingre];
    });
    
    let buttonDisable=false;
    // console.log(count);
    if(count===0)
    {
        buttonDisable=true;
    }
    const ingredientListJSX=ingredientList.map((ingredient,i)=>
        {
            return(
                <BuildControl ingredient={ingredient} key={ingredient+i}
                increase={()=>props.increase(ingredient)}
                decrease={()=>props.decrease(ingredient)}
                disable={props.disabledInfo[ingredient]}></BuildControl>
            );
        });
        console.log(ingredientListJSX);
    return (
        <div className={classes.BuildControls}>
        
            {ingredientListJSX}
            <button className={classes.OrderButton} disabled={buttonDisable} 
            onClick={props.ordernow}
            >ORDER NOW</button>
        </div>
        
        
    );
}

export default BuildControls;
    
