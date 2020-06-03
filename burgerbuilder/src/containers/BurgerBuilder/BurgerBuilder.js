import React ,{Component} from 'react';
import Burger from '../.././Burger/Burger';


class BurgerBuilder extends Component
{
    state={
        ingredient:{salad:1,
                    bacon:1,
                    cheese:2,
                    meat:2}
    };
    render()
    {
        return (
            <React.Fragment>
                <Burger ingredient={this.state.ingredient}></Burger>
                <div>BurgerBuilder</div>
            </React.Fragment>
        );
    }
}

export default BurgerBuilder;
