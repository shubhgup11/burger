import React from 'react';
import classes from './Order.module.css'

const Order = (props)=>{


    let ingredientList=[];
    for (let ingredient in props.ingredient)
    {
        ingredientList.push({name:ingredient,amount:props.ingredient[ingredient]})
    }

    let ingredientListJSX=ingredientList.map((ingredient)=>{
        return(<span style={
            {
                textTransform:"capitalize",
                display:'inline-block',
                margin:'0 8px',
                border:'1px solid #ccc',
                padding:'5 px'

            }
        } key={ingredient.name}>{ingredient.name}:{ingredient.amount}</span>)
    }
    )



    return(
        <div className={classes.Order}>
            <p>Ingredient : {ingredientListJSX}</p>
            <p>Price : US$ {props.price}</p>
        </div>
    )
}

export default Order;