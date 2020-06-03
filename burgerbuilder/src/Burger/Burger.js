import React from'react';
import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger= (props)=>
{
    const ingredientList=Object.keys(props.ingredient);
    const ingredientListJSX=ingredientList.map((ingr)=>{
        return ([...Array(props.ingredient[ingr])].map((_,i)=>
        {
            return (
                <BurgerIngredient type={ingr} keys={ingr+i} ></BurgerIngredient>
            );
        })
        );
    });
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {ingredientListJSX}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
            
            
        </div>
    )
}

export default Burger;