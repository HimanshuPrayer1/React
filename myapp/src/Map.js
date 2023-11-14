import React, { Component } from 'react'

 class Map extends Component {
    constructor(){
        super();
        this.state={pro:[{name:"prime",price:45},{name:"Him",price:450}],pro1:[]}
    }
    sd=async()=>{
        let res=await fetch('https://jsonplaceholder.typicode.com/todos/');
        res= await res.json();
        this.setState({pro1:res})
        console.log(this.state.pro1)
    }

  render() {
    return (
      <div>
      
        <button onClick={this.sd}>clk</button>
        {
            this.state.pro1.map((item)=>
            <div>
                <p>{item.id}</p>
            </div>

            )
        }
         
        
      </div>
      
    )
  }
}
export default Map;
