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


    const[x,setx]= React.useState(300);
    const[mm,setMM] = React.useState(0);
    const[ss,setSS]=React.useState(0);

    const[list,setList] = React.useState(0);


    React.useEffect(()=> {
        FetchUserData().then((data)=> {
         SetName(data.x);
         SetId(data.y);
       });

                setInterval(()=> {
                    setx(x-1);
                    setMM(Math.trunc(x/60));
                    setSS(x%60);
                },  2000);

            
       });

       return(
        <div>
            Name: {name} <br />
            id: {id}
            <br />
            <br />
            <p>Excersize -- 01</p>
            <h1>{mm}: {ss}</h1>

            <br />
            <br />
            <p>Excersize -- 02</p>
            <ul>
                {list.map((item,index)=> <li key={index}>{item.x} - {item.y}</li>)}
            </ul>

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




