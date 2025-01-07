import {useState} from "react";

function HookExample1(){
        const [name] = useState("Hello Vijay");
        return <h1>{name}</h1>
}


export default HookExample1;

// Hooks in React :- Hooks are a new feature that let you use state and other React features without writing a class. Hooks are a way to reuse stateful logic between components.

// Hooks :- "  allow function components to have access to state and other React features.  ";

// Hooks Are In Sem 
// 1. useState   --> Define  Your Own Methods for Hooks              ==>  hook is a function that allows you to add state to functional components.  
// 2. useEffact  --> Define API Functions for Hooks                  ==>  Hook that allows you to perform side effects in functional components.
// 3. useReducer --> used to store and update states,                ==>  hook is a built-in function that allows you to manage complex state logic in a more structured way. 
// 4. useContext --> used to consume values from a React context.    ==>  Hook that allows you to access the value of a Context object from within a functional component.
// 5. useMemo                                                        ==>  returns a memoized value and prevents the application from unnecessary re-renders.
// 6. useReference                                                   ==>  allows you to persist values between renders. 
// 7. CustomHooks




// For Output Use Main.jsx
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import HookExample1 from './Lecture31_12_2024/HooksExample'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <HookExample1/>
//   </StrictMode>,
// )



