import * as React from "react";

class CreateComponent extends React.Component {
    state = {                       // state
            first: false,
            second: 1.23,
            third: "Vijay",
            four : "Red",
            five : "Green",
            six : "Yellow",
        };
    render() {
        const { first, second, third ,four,five,six } = this.state;
        return (
            <div>
                <h1>Create Component Using </h1>
                <h2 style={{color:four}}>Class Component</h2>
                <button disabled={first}> My Button </button>
                <p style={{color : five}}>Value Of Float Variable is <strong>{second}</strong></p>
                <p style={{color:six}}>Value Of String Variable is <strong>{third}</strong></p>
            </div>
        );
    }
}

export default CreateComponent;