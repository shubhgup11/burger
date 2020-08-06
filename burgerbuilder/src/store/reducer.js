import * as actionTypes from './actionType';

const INGREDIENTPRICE={
    salad:0.5,
    bacon:0.4,
    meat:1.3,
    cheese:0.3
};

const initialState={
    ingredient:{
            salad:0,
            bacon:0,
            cheese:0,
            meat:0},
    totalPrice:4
}

const reducer=(state=initialState, action)=>
{
    console.log("here");

    switch(action.type){
        case 'SUBTRACT_INGREDIENT' :{
            if(state.ingredient[action.ingredientType]===0)
                return state;
            let  Newingredient={...state.ingredient};
            let  oldCount=state.ingredient[action.ingredientType];
            Newingredient[action.ingredientType]=oldCount-1;
            let newPrice=state.totalPrice;
            if(Newingredient[action.ingredientType]>=0)
            {
                newPrice=newPrice-INGREDIENTPRICE[action.ingredientType];
            }
            return {ingredient:Newingredient,totalPrice:newPrice};
        }
        case 'ADD_INGREDIENT':
            {console.log("here");
            let oldCount=state.ingredient[action.ingredientType];
            let Newingredient={...state.ingredient};
            Newingredient[action.ingredientType]=oldCount+1;
            let oldPrice=state.totalPrice;
            let newPrice=oldPrice+INGREDIENTPRICE[action.ingredientType];
            return {ingredient:Newingredient,totalPrice:newPrice};
    }
        default:
            return state;
    }
}


export default reducer;