import * as React from "react";

class StateManagegement3 extends React.Component {
    state = {
        first : "Loading",
        second : "Loading",
        third : "Loading",
        fourth : "Loading",
        fifth : "Loading",
        compltemesj : "Loading Done.......",
    };

    constructor(){
        super();
        setTimeout(() => {
            this.setState({first : "Loading"});
         },2000);
         setTimeout(() => {
            this.setState({second : "Loading"});
         },4000);
         setTimeout(() => {
            this.setState({third : "Loading"});
         },6000);
         setTimeout(() => {
            this.setState({fourth : "Loading"});
         },8000);
         setTimeout(() => {
            this.setState((state) => ({
                ...state,
                first : state.compltemesj,
                second : state.compltemesj,
                third : state.compltemesj,
                fourth : state.compltemesj,
                fifth : state.compltemesj,
            }));
         },10000);
    }
    render() {
        return (
            <div>
                <ul>
                    {
                        Object.keys(this.state)
                        .filter((keys)=> keys !== "compltemesj")
                        .map((keys) => (
                            <li key={keys}> <strong> {keys}</strong> : {this.state[keys]} </li>
                        ))
                    }
                </ul>

            </div>
        );
    }
}

export default StateManagegement3;

//Copy one state to another
//function changing in 3 s
//map
//filter
//how to use state without declaring it inside ren Methods