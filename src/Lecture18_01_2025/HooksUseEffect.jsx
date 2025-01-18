import * as React from "react";

function FetchUserData(){
    return new Promise((resolve)=> {
        setTimeout(()=> {
            resolve(
                {x: "RK", y: 25},
        );
        }, 5000);
    });
}

function ApiSimulations(){
    const[name, SetName] = React.useState("Loading.........");
    const[id,SetId] = React.useState("Loading........");
    React.useEffect(()=> {
        FetchUserData().then((data)=> {
         SetName(data.x);
         SetId(data.y);
       });
       });

       return(
        <div>
            Name: {name} <br />
            id: {id}
        </div>
    );
}



export default ApiSimulations;


// Main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import ApiSimulations from './Lecture18_01_2025/HooksUseEffect'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <ApiSimulations/>
//   </StrictMode>,
// )




