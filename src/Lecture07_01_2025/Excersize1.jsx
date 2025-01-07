import { useState } from "react";

function Excersize1(){
    const [num1 , setnum1] = useState(10);
    const [num2 , setnum2] = useState(5);
    const [result , setresult] = useState(0);

    return(
        <div>
            <h1>excersize 1</h1>
            <p>create a react pure functions component to take two num and that give a addtion,substration ,multiply and division</p>
            <input type="number" value={num1} onChange={(e)=>setnum1(e.target.value)} />
            <input type="number" value={num2} onChange={(e)=>setnum2(e.target.value)} />
               
                <br /><br />

                <button onClick={() => setresult(num1 + num2)}>Addition</button>
                <br />
                <br />
                <button onClick={() => setresult(num1 - num2)}>Substraction</button>
                <br /><br />
                <button onClick={() => setresult(num1 * num2)}>Multiplication</button>
                <br /><br />
                <button onClick={() => setresult(num1 / num2)}>Division</button>
                <br /><br />

                <p>result : {result}</p>
           

            
        </div>
    );
}
export default Excersize1;


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import Excersize1 from './Lecture07_01_2025/Excersize1'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <Excersize1/>
//   </StrictMode>,
// )




