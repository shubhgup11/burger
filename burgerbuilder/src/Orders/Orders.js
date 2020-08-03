import React ,{Component} from 'react';
import Order from '../Order/Order';
import axios from 'axios';



class Orders extends Component
{

    // const Orders=this.state.orders.map(()=><Order></Order>)
    state={orderList:[],loading:true}
    componentDidMount()
    {
        let orderListTemp=[];
    axios.get('/orders.json').then((res)=>{
        // console.log(res.data);
        for (let key in res.data)
        {
            orderListTemp.push({...res.data[key],key:key})
        }
        this.setState({orderList:orderListTemp,
        loading:false});
        // console.log(orderListTemp);
    
    })
    }

    render()
    {
        let orderListJSX=this.state.orderList.map((order)=>
        {
            return(
                <Order price={order.price} key={order.key} ingredient={order.ingredient}></Order>
            )
        })

        return (
            <div>
            {orderListJSX}
            </div>
        );
    }
}


export default Orders;