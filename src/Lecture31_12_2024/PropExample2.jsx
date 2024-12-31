import * as React from "react";

class Mylist extends React.Component {
    render() {
        const {item}= this.props;
        return (
            <ul>
               {item.map((i)=> (
                <li key={i}> { i}</li>
               ))}
            </ul>
        );
    }
}
export default Mylist;
