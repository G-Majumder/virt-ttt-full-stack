import React from "react";
import { Component } from "react";

type CounterState = {
    count : number;
};

class Counter extends Component <{}, CounterState> {
    constructor(props: {}){
        super(props);
        this.state = {
            count : 0
        };
        // binding the increment with this
        this.increment = this.increment.bind(this);
    }
    increment(){
        this.setState((prevState)=>({
            count : prevState.count + 1
        }));
            
    }

    render(): React.ReactNode {
        return(
            <div>
                <h2>Counter Value: {this.state.count}</h2>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}
export default Counter;