import React from "react";

type UseCardProps = {
    name : string;
    age : number;
};

const UserCard : React.FC<UseCardProps> = ({name, age}) => {
    return (
        <div style={ {border: '1px solid gray', padding: '10px', borderRadius: '8px', width: '200px'}}>

            <h3 style={ {backgroundColor: 'lightcyan', alignContent : 'center'}}> User Data</h3>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Age:</strong> {age}</p>
        </div>
    );
}

export default UserCard;