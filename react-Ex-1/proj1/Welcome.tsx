import React from "react";

type WelcomeProps = {
    name : string;
}


const Welcome : React.FC<WelcomeProps> = ({ name }) => {
    return <h1>Welcome {name}.</h1>;
};

export default Welcome