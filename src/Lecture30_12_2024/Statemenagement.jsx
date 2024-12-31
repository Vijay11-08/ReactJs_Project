import * as React from "react";

class StateManagement extends React.Component {
    state = {                       // state
        first: false,
        second: 1.23,
        third: "Vijay",
        four : "Red",
        five : "Green",
        six : "Yellow",
    };

    constructor(){
        super();
        setTimeout(() => {
            //Change the state value 
            this.setState({first: true, second:4.56, third:"Vijay", four:"Blue", five:"Purple", six:"Orange"});
            // this.setState({first: true});
            // this.setState({second: 4.56});
            // this.setState({third: "Rohan"});
            // this.setState({four : "Blue"});
            // this.setState({five : "Pink"});
            // this.setState({six : "Orange"});
         },3000);
    };
render() {
    const { first, second, third ,four,five,six } = this.state;
    return (
        <div>
            <h1>Create Component Using </h1>
            <h2 style={{color:four,textAlign:"center"}}>Class Component</h2>
            <button disabled={first}> My Button </button>
            <p style={{color : five,border:2}}>Value Of Float Variable is <strong>{second}</strong></p>
            <p style={{color:six,fontSize:44}}>Value Of String Variable is <strong>{third}</strong></p>
        </div>
    );
}

}

export default StateManagement;