import { useState } from "react";

function Excersize4(){
    const [char , setchar] = useState("");


    return(
        <div>
         <h1>Exercise 4</h1>
                <p>Create a React component that will take text input and print total number of characters</p>
               
               
               
                <input type="text" value={char} onChange={(e)=>setchar(e.target.value)}/>

                <br />
                
                <p>Total characters: {char.length}</p>


        
                
        </div>
    );
}
export default Excersize4;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import Excersize4 from './Lecture07_01_2025/Excersize4'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <Excersize4/>
//   </StrictMode>,
// )





             