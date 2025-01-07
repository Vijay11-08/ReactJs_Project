import { useState } from "react";

function Excersize3(){
    const [text , settext] = useState("");


    return(
        <div>
         <h1>Exercise 3</h1>
                <p>Create a React component that will toggle the visibility of text written by user ,take one text box And
                    one button ,button will toggle the visibility when text is vivible text should be hide and text is hidden button text should be show text
                </p>
                <input type="text" value={text} onChange={(e) => settext(e.target.value)} />
                <button onClick={() => settext("")}>
                    {text? "Hide Text" : "Show Text"}
                </button>
                <br />

                <p>Visible Text: {text}</p>
                <br />
        

    
        </div>
    );
}
export default Excersize3;

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import Excersize3 from './Lecture07_01_2025/Excersize3'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <Excersize3/>
//   </StrictMode>,
// )




