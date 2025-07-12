import React from "react";
import { Component } from "react";

class LoggerComponent extends Component{
    componentDidMount(): void {
        console.log("Component Mounted");
    }

    render(): React.ReactNode {
        return (
            <div>
                <h3>Welcome to the LoggerComponent</h3>
            </div>
        );
    }
}

export default LoggerComponent;