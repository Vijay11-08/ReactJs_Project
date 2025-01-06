import {useState} from "react";

function HookExample2() {
const [name]= useState("Hook Example2");
return <div>{name}</div>

}


export default HookExample2;

// For Output Use Main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import HookExample2 from './Lecture06_01_2025/Hookexample1'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <HookExample2/>
//   </StrictMode>,
// )




