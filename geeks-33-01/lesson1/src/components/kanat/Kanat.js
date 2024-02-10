import React from 'react';


const kanat = ({ name, age} ) => {
    console.log(name, age);
    return (
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
        </div>
    );
};

export default kanat;