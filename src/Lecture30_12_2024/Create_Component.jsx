import * as React from "react";

class CreateComponent extends React.Component {
    state = {                       // state
            first: false,
            second: 1.23,
            third: "Vijay",
        };
    render() {
        const { first, second, third } = this.state;
        return (
            <div>
                <h1>Create Component Using </h1>
                <h2>Class Component</h2>
                <button disabled={first}> My Button </button>
                <p>Value Of Float Variable is <strong>{second}</strong></p>
                <p>Value Of String Variable is <strong>{third}</strong></p>
            </div>
        );
    }
}

export default CreateComponent;