import * as React from "react";

// Each Class Component Must Contains A Render Function
class Component2 extends React.Component{
render() {
    return(
        <div>
            <h1>Component 2</h1>
        </div>
    );
}
}
class Component3 extends React.Component
{
    render() {
        return(
            <div>
                <h1>Component 3</h1>
            </div>
        );
    }
}


class Component1 extends React.Component
{
    render( ){
        return(
            <div>
                <h1>Component 1</h1>
                <h2>Hello</h2>

                <Component2/>
                <Component3/>
            </div>
        );
    }
}

export default Component1;