import React ,{Component} from 'react';
import Burger from '../.././Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../Modal/modal';
import BackDrop from '../../Burger/Backdrop/Backdrop';

const INGREDIENTPRICE={
    salad:0.5,
    bacon:0.4,
    meat:1.3,
    cheese:0.3
};

class BurgerBuilder extends Component
{
    
    state={
        ingredient:{salad:0,
                    bacon:0,
                    cheese:0,
                    meat:0},
        totalPrice:4,
        modalShow:false,
        backdropshow:false,
        loading:false

    };
    subrtactIngredientHandler=(type)=>
    {
        
        this.setState((prevState,props)=>
        {
            if(prevState.ingredient[type]===0)
                return {};
            const oldcount=prevState.ingredient[type];
            const Newingredient={...prevState.ingredient};
            Newingredient[type]=oldcount-1;
            let newPrice=prevState.totalPrice;
            if(Newingredient[type]>=0)
            {
                newPrice=newPrice-INGREDIENTPRICE[type];
            }

            return {ingredient:Newingredient,totalPrice:newPrice}
        });
    }
    addIngredientHandler=(type)=>
    {
        
        this.setState((prevState,props)=>
        {
            const oldcount=prevState.ingredient[type];
            const Newingredient={...prevState.ingredient};
            Newingredient[type]=oldcount+1;
            const oldPrice=prevState.totalPrice;
            const newPrice=oldPrice+INGREDIENTPRICE[type];
            return {ingredient:Newingredient,totalPrice:newPrice}
        });
    }
    

    ContinueClickHandler=()=>
    {
        let queryParams=[];
        for(let i in this.state.ingredient)
        {
            queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.state.ingredient[i]))
        }
        queryParams.push(encodeURIComponent('price')+'='+encodeURIComponent(this.state.totalPrice))
        let queryString=queryParams.join('&');
        // console.log(queryString)
        this.props.history.push({
            pathname:'/checkout',
            search: '?'+queryString
        });

        
        
    }
    CancelClickHandler=()=>
    {
        this.setState((prevState,props)=>
        {
            return {modalShow:!prevState.modalShow,backdropshow:!prevState.backdropshow};
        });
        
    }
    orderNowClickHandler=()=>
    {
        this.setState((prevState,props)=>
        {
            return {modalShow:!prevState.modalShow,backdropshow:!prevState.backdropshow};
        });
    }
    backdropCLickHandler=()=>
    {
        this.CancelClickHandler();
    }
    render()
    {
        
        let modal=null;
        if(this.state.modalShow)
            modal=
            <React.Fragment>
            <BackDrop clicked={this.backdropCLickHandler} show={this.state.backdropshow}/>
            <Modal ingredients={this.state.ingredient} DangerClick={this.CancelClickHandler}
             SuccessClick={this.ContinueClickHandler}
             price={this.state.totalPrice} showLoader={this.state.loading}></Modal>
            </React.Fragment>;
        // console.log(modal);
        // console.log(this.state.totalPrice);
        // console.log(this.props);
        const disabledInfo={...this.state.ingredient};
        for (let key in disabledInfo)
        {
            disabledInfo[key]=disabledInfo[key]===0;
        }
        return (
            <React.Fragment>
                {modal}
                <Burger ingredient={this.state.ingredient} price={this.state.totalPrice}></Burger>
                <BuildControls ingredients={this.state.ingredient}
                 decrease={(type)=> this.subrtactIngredientHandler(type)}
                 increase={(type)=> this.addIngredientHandler(type)}
                 disabledInfo={disabledInfo}
                 ordernow={this.orderNowClickHandler}
                 ></BuildControls>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
