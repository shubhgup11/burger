import React from'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger= (props)=>
{
    const ingredientList=Object.keys(props.ingredient);
    let ingredientListJSX=ingredientList.map((ingr)=>{
        return ([...Array(props.ingredient[ingr])].map((_,i)=>
        {
            return (
                <BurgerIngredient type={ingr} key={ingr+i} ></BurgerIngredient>
            );
        })
        );
    }).reduce((arr1d,iter)=> {
        return arr1d.concat(iter);},[]);
    console.log(ingredientListJSX);
    if(ingredientListJSX.length===0)
    {
        ingredientListJSX=<p>Please start adding ingredients</p>
    }
    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {ingredientListJSX}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>

            <p> The price is {props.price}</p>
            
            
        </div>
    )
}

export default Burger;