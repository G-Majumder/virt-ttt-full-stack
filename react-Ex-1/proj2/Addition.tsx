import React from "react";

// Create a Additon Type
interface AdditonProps{
    num1 : number;
    num2 : number;
};

const Add: React.FC<AdditonProps> = ({a, b}) => {
    const result = a + b;

    return <h4>The sum of {a} + {b} = {result}</h4>
}

export default Add