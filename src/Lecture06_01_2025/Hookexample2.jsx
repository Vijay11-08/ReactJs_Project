import {useState} from "react";

function HookExample3() {
const [name , setname]= useState("Hook Example2");
return (
<div>
    <h1>{name}</h1>
    <input type="text" 
        value={name} 
        onChange={(e)=>setname(e.target.value)}
    />
</div>
);
}


//arrow Functions

export default HookExample3;


// For Output Use Main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import HookExample3 from './Lecture06_01_2025/Hookexample2'
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <HookExample3/>
//   </StrictMode>,
// )




