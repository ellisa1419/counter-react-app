import React from "react";
import Button from '@material-ui/core/Button';

 class Counter extends React.Component {
    constructor(props) {
        super(props);
         //this.state = { count: 0 };
         this.state = { count: props.count };
      }
       
increment(){
    this.setState({
        count: this.state.count + 1
    })
}
decrement(){
    this.setState({
        count: this.state.count - 1
    })
}
  render (){
    return (
    <div className="counter">
      <h2>Counter</h2>
      <div>
         <button onClick={()=>this.decrement()}>-</button> 
          <span>{this.state.count}</span>
        <button onClick={()=>this.increment()}>+</button>
      </div>

      {/* material ui */}
      {/* <div>
      <Button color="primary" onClick={()=>this.decrement()} variant="contained">-</Button>
        <span>{this.state.count}</span>
      <Button  color="primary" onClick={()=>this.increment()} variant="contained">+</Button>  
      </div> */}
    </div>

    
    );
};
}

export default Counter;