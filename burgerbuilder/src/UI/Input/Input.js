import React,{Component} from 'react';
import classes from './Input.module.css';


class Input extends Component{


    render(){

        let inputElement=null;

        // console.log(this.props);
        let classAll=[classes.InputElement];
        if(!this.props.valid && this.props.touched)
        {
            classAll.push(classes.Invalid);
        }
        switch(this.props.inputtype){
            case ('input') : inputElement= <input className={classAll.join(' ')} {...this.props}></input>
                            break;
            case ('textarea'): inputElement=<textarea className={classAll.join(' ')} {...this.props}/>
                                break;
            case('select'): inputElement=(<select className={classAll.join(' ')} {...this.props}>
                                        {this.props.values.map((val)=>{
                                            return (
                                                <option value={val.value} key={val.value}>{val.displayValue}</option>
                                            );
                                        })}
                                        </select>)
                            break;
            default : inputElement= <input className={classAll.join(' ')} {...this.props}></input>
        }

        return(
            <div className={classes.Input}>
                <label classes={classes.Label}>{this.props.label}</label>
            {inputElement}
            </div>
        );

    }
}

export default Input;