import React, {Component} from 'react';
import Button from '../../UI/Button/Button';
import classes from './ContactData.module.css';
import axios from'axios';
import LoadSpinner from '../../LoadSpinner/LoadSpinner';
import Input from '../../UI/Input/Input';
import {withRouter} from 'react-router-dom';

class ContactData extends Component
{
    state={
        formElements:{name:{inputtype:'input',
                            eleConfig:{
                                type:'text',
                                name:'name',
                                placeholder:"Your name"

                            },
                            validation:{
                                required:true
                            },
                            valid:false,
                            touched:false,
                            value:''
                        },
                    email:{
                            inputtype:'input',
                            eleConfig:{
                                type:'email',
                                name:'email',
                                placeholder:"Your E-Mail"
                            },
                            validation:{
                                required:true
                            },
                            valid:false,
                            touched:false,
                            value:''},
                    street:{
                            inputtype:'input',
                            eleConfig:{
                                type:'text',
                                name:'street',
                                placeholder:"Your Street"

                            },
                            validation:{
                                required:true
                                
                            },
                            valid:false,
                            touched:false,
                            value:''},

                    postalcode:{
                                inputtype:'input',
                                eleConfig:{
                                    type:'text',
                                    name:'postalcode',
                                    placeholder:"Your Postal code"

                                },
                                validation:{
                                    required:true,
                                    length:6
                                },
                                valid:false,
                                touched:false,
                                value:''},
                    deliverymethod:{
                                inputtype:'select',
                                eleConfig: {name:'deliverymethod',
                                            values:[
                                                {value:'cheapest', displayValue:'Cheapest'},
                                                {value:'fastest',displayValue:'Fastest'}
                                            ]},
                                validation:{
                                },
                                valid:true,
                                touched:true,
                                value:''
                    }

        },
        isvalid:false,
        loading:false
    };

    formClickHandler = (event)=>
    {
        event.preventDefault();
        console.log("hey");
        this.setState({loading:true});

        let formDetails={};
        for (let key in this.state.formElements)
        {
            formDetails[key]=this.state.formElements[key].value
        }
        let order={
            ingredient:this.props.ingredient,
            price:this.props.price,
            ...formDetails
        };

        axios.post('/orders.json',order).then(
            (response)=>{
                console.log(response);
                this.setState((prevState,props)=>
                {
                    return {loading:false};
                });
                this.props.history.push("/");
            }
        ).catch((error)=>{
            console.log(error);
            this.setState((prevState,props)=>
                {
                    return {loading:false};
                });
        });
    }


    validationCheck=((val,rules)=>{

        let validTemp=true;
        console.log(val);
        if(rules.required)
        {
            validTemp= !(val.trim()==='') && validTemp;
        }
        if(rules.length)
        {
            validTemp = val.length===rules.length && validTemp;
        }
        console.log('validtemp',validTemp);
        return validTemp ;
    })
    
    changeHandler=((event,key)=>
    {
        // console.log(event.target.value);
        // console.log('hello',this.props);

        let updatedFormElements={...this.state.formElements};
        let updatedEle={...updatedFormElements[key]};
        console.log(updatedEle);
        updatedEle.value=event.target.value;
        updatedEle.valid=this.validationCheck(updatedEle.value,updatedEle.validation);
        updatedEle.touched=true;
        updatedFormElements[key]=updatedEle;
        let updatedVailidity=true;
        this.setState({formElements:updatedFormElements},()=>{
        
        for(let key in this.state.formElements)
        {
            updatedVailidity=this.state.formElements[key].valid && updatedVailidity;
        }
        this.setState({isvalid:updatedVailidity},()=>{
            console.log('form validity'+this.state.isvalid);
            // console.log("hey");
        });
        });
        
        
        
        // console.log(this.state);
        // console.log(this.state.formElements[key]);
        
    })

    render()
    {
        // console.log("adj");
        console.log(this.props);
        let formJSX=null;
        let inputList=[];
        for(let key in this.state.formElements){
            inputList.push(this.state.formElements[key]);
        }
        let inputJSX=[];
        inputJSX=inputList.map((ele)=>{
            return(
                <Input inputtype={ele.inputtype} type={ele.eleConfig.type} 
                name={ele.eleConfig.name}
                placeholder={ele.eleConfig.placeholder}
                key={ele.eleConfig.name}
                values={ele.eleConfig.values}
                onChange={(event)=>{this.changeHandler(event,ele.eleConfig.name)}}
                valid={ele.valid}
                touched={ele.touched} />
            )
        })
        if(this.state.loading)
        {
            formJSX=<LoadSpinner></LoadSpinner>
        }
        else
        {
        formJSX = (<form>
                {inputJSX}
                {/* <Input inputtype="input" type="text" name="name" placeholder="Your name"></Input>
                <Input inputtype="input"  type="email" name="email" placeholder="Your email"></Input>
                <Input inputtype="input" type="text"  name="street" placeholder="Your street"></Input>
                <Input inputtype="input" type="text" name="Postal Code" placeholder="postal code"></Input> */}
                <Button btnType="Success" clicked={this.formClickHandler} disabled={!this.state.isvalid}>Submit</Button>
            </form>);
        }
        return(
            
            <div className={classes.ContactData}>
                <h4>Enter your contact Data</h4>
                {formJSX}
            </div>
        )
    }
}

export default withRouter(ContactData);