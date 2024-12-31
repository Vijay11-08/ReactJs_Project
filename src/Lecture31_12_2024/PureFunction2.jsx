import * as React from "react";

 const MyCustButton =({var1,var2}) => (
    <button disabled={var1}>
        {var2}
    </button>
);

MyCustButton.defaultProps ={
    var1 : false,
    var2 : "Default Button Text",
};
export default MyCustButton;

// For Output Use Main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import MyCustButton from './Lecture31_12_2024/PureFunction2'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <MyCustButton/>
//     <br />
//     <MyCustButton var1={true}/>
//     <br />
//     <MyCustButton var2={"IT - A "}/>
//     <br />
//     <MyCustButton var1={true} var2={"B.Tech (IT-A) "}/>
//   </StrictMode>,
// )



