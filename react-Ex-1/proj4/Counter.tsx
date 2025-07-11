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
        this.decrement = this.decrement.bind(this);
    }
    increment(){
        this.setState((prevState)=>({
            count : prevState.count + 1
        }));
            
    }

    decrement(){
        this.setState((prevState) => ({
            count : prevState.count - 1
        }));
    }

    render(): React.ReactNode {
        return(
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <button onClick={this.increment} style={{ backgroundColor: 'red' }}>+</button>
                <h2 style={{ margin: 0 }}>Counter: {this.state.count}</h2>
                <button onClick={this.decrement} style={{ backgroundColor: 'lightblue' }}>−</button>
            </div>
        );
    }
}
export default Counter;