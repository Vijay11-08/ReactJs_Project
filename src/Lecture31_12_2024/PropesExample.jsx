import * as React from "react";

class PropesExample extends React.Component {
    render() {
        const {prop1, xyz} = this.props;
            return (
                <div>
                    <h1>
                        Propes
                    </h1>
                    <button disabled={prop1}> {xyz}</button>
                </div>
            )
        }
    }
export default PropesExample;