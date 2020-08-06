import React ,{Component} from 'react';
import Burger from '../.././Burger/Burger';
import BuildControls from '../../Burger/BuildControls/BuildControls';
import Modal from '../../Modal/modal';
import BackDrop from '../../Burger/Backdrop/Backdrop';
import {connect} from 'react-redux';

// const INGREDIENTPRICE={
//     salad:0.5,
//     bacon:0.4,
//     meat:1.3,
//     cheese:0.3
// };

class BurgerBuilder extends Component
{
    
    state={
        modalShow:false,
        backdropshow:false,
        loading:false

    };
    // subrtactIngredientHandler=(type)=>
    // {
        
    //     this.setState((prevState,props)=>
    //     {
    //         if(prevState.ingredient[type]===0)
    //             return {};
    //         const oldcount=prevState.ingredient[type];
    //         const Newingredient={...prevState.ingredient};
    //         Newingredient[type]=oldcount-1;
    //         let newPrice=prevState.totalPrice;
    //         if(Newingredient[type]>=0)
    //         {
    //             newPrice=newPrice-INGREDIENTPRICE[type];
    //         }

    //         return {ingredient:Newingredient,totalPrice:newPrice}
    //     });
    // }
    // addIngredientHandler=(type)=>
    // {
        
    //     this.setState((prevState,props)=>
    //     {
    //         const oldcount=prevState.ingredient[type];
    //         const Newingredient={...prevState.ingredient};
    //         Newingredient[type]=oldcount+1;
    //         const oldPrice=prevState.totalPrice;
    //         const newPrice=oldPrice+INGREDIENTPRICE[type];
    //         return {ingredient:Newingredient,totalPrice:newPrice}
    //     });
    // }
    

    ContinueClickHandler=()=>
    {
        // let queryParams=[];
        // for(let i in this.props.ingredient)
        // {
        //     queryParams.push(encodeURIComponent(i)+'='+encodeURIComponent(this.props.ingredient[i]))
        // }
        // queryParams.push(encodeURIComponent('price')+'='+encodeURIComponent(this.props.totalPrice))
        // let queryString=queryParams.join('&');
        // // console.log(queryString)
        // this.props.history.push({
        //     pathname:'/checkout',
        //     search: '?'+queryString
        // });

        this.props.history.push('/checkout');
        
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
            <Modal ingredients={this.props.ingredient} DangerClick={this.CancelClickHandler}
             SuccessClick={this.ContinueClickHandler}
             price={this.props.totalPrice} showLoader={this.state.loading}></Modal>
            </React.Fragment>;
        // console.log(modal);
        // console.log(this.state.totalPrice);
        // console.log(this.props);
        const disabledInfo={...this.props.ingredient};
        for (let key in disabledInfo)
        {
            disabledInfo[key]=disabledInfo[key]===0;
        }
        return (
            <React.Fragment>
                {modal}
                <Burger ingredient={this.props.ingredient} price={this.props.totalPrice}></Burger>
                <BuildControls ingredients={this.props.ingredient}
                 decrease={(ingredientType)=> this.props.subrtactIngredientHandler(ingredientType)}
                 increase={(ingredientType)=> this.props.addIngredientHandler(ingredientType)}
                 disabledInfo={disabledInfo}
                 ordernow={this.orderNowClickHandler}
                 ></BuildControls>
            </React.Fragment>
        );
    }
}


const mapStateToProps = ((state)=>{
    return({
        ingredient:state.ingredient,
        totalPrice:state.totalPrice}

    )
});

const mapDispatchToProps=((dispatch)=>
{
    return(
        {
            subrtactIngredientHandler: (ingredientType)=>dispatch({type:'SUBTRACT_INGREDIENT',ingredientType:ingredientType}),
            addIngredientHandler: (ingredientType)=>dispatch({type:'ADD_INGREDIENT',ingredientType:ingredientType})
        }
    )
});


export default connect(mapStateToProps,mapDispatchToProps)(BurgerBuilder);
// export default BurgerBuilder;
