import * as React from "react";
import MyButton from "./PropesExample";
import MyList from "./PropExample2";

class MyCustComponent extends React.Component {
    state = {
        var1: true,
        var2: "Btn1",
        var3: ["a", "b", "c", "d", "e"],
    };
    constructor(){
        super();
        setTimeout(()=>
        this.setState({var1: false, var2: "Btn2", var3: ["f", "g", "h", "i", "j"]}),
        2000);  // 2 seconds later
    }
    render() {
       const { var1, var2, var3} = this.state;
        return(
            <div>
                <MyButton prop1={var1} xyz={var2}/>
                <MyList item={var3}/>
            </div>
        );
    }
}

export default MyCustComponent;
