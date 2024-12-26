import * as React from "react";

class Htmlcomponents extends React.Component {
    render(){
        return (
            <div>
                <label htmlFor="">TextBox</label>  <input type="text" name="" id="" /> 
<br />
                <label htmlFor="">Checkbox</label> <input type="checkbox" name="" id="" />
<br />
                <label htmlFor="">Radio Button</label> <input type="radio" name="" id="" />
                <br />

                <label htmlFor="">Color </label> <input type="color" name="" id="" />
                <br />

                <label htmlFor="">File</label> <input type="file" name="" id="" />
                <br />
<label htmlFor="">Password</label> <input type="password" name="" id="" />
<br />

                <label htmlFor="">Date</label> <input type="date" name="" id="" />
            </div>
        );
    }
}

export default Htmlcomponents;