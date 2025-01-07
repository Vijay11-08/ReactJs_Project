import { useState } from "react";

function Excersize2(){
    const [email , setemail] = useState("");


    return(
        <div>
         <h1>Exercise 2</h1>
                <p>Create a React component that will take email address as an input and check that is valid or not</p>
        
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
                <button onClick={() => console.log(email)}>Submit</button>

                {email.includes("@") && email.includes(".")? <p>Valid Email</p> : <p>Invalid Email</p>}
            
        </div>
    );
}
export default Excersize2;
             
// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import Excersize2 from './Lecture07_01_2025/Excersize2'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <Excersize2/>
//   </StrictMode>,
// )




