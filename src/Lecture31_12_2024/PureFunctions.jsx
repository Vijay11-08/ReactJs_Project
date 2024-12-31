import * as React from "react";

class PureFunction extends React.Component {
    render(){
        return(
            <div>
                <h1> Pure Function </h1>
            </div>
        );
    }
}

export default ({var1,var2}) => 
    <button disabled={var1}>
        {var2}
    </button>;


// For Output Use Main.jsx

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import PureFunctions from './Lecture31_12_2024/PureFunctions'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <PureFunctions var1={true} var2={"Hello world!"}/>
// <PureFunctions var1={false} var2={"Hello Vijay!"}/>

//   </StrictMode>,
// )



