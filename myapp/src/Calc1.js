import { Component } from "react";

import React from "react";
class Calc1 extends Component{
    constructor(){
        super()
      this.state={num1:'',num2:'',res:'',greet:'',res1:''}  
    }
    add=()=>{
        
        console.log()
       this.setState({res:parseFloat(this.state.num1)+ parseFloat(this.state.num2)})
    }
    sub=()=>{
        let a=parseFloat(this.state.num1);
        let b=parseFloat(this.state.num2);
        let sub=a-b
       this.setState({res:sub})

    }
    greet1=()=>{
       this.setState({greet:`good morning ${this.state.res1}`}) 
    }

    render(){

        return(
            <div>
                <h1>Calc using Class Component</h1>
                <input type="text" onChange={(e)=>{this.setState({num1:e.target.value})}}></input>
                <input type="text" onChange={(e)=>{this.setState({num2:e.target.value})}}></input>
                <button onClick={this.add}>Add+</button>
                <button onClick={this.sub}>Subtract-</button>
                <h1>{this.state.res}</h1>

                <h1>
                    Greet user using class Component
                </h1>
                <input type='text' onChange={(e)=>{this.setState({res1:e.target.value})}}></input>
                <button onClick={this.greet1}>Greet</button>
                <h1>{this.state.greet}</h1>
            </div>
        )
    }
}
export default Calc1;