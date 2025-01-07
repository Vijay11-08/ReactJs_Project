import { useState } from "react";

function Excersize3(){
    const [text , settext] = useState("");
    const[button, setbtn] = useState("Show Text");
    const [btnbool , setbtnbool] = useState(false);
    const [paradisp, setparadisp] = useState("none");
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
                <p style={{display:paradisp}}>
                    create a reacte component that will toggle the visibility of text written by user 
                    take one text box and one button, button will toggle the visibility when text is vivible text should be hide and text is hidden button text should be show texx
                </p>
                <input type="text" value={paradisp} onChange={(e) => setparadisp(e.target.value)} />

                <br />
                <br />
                <button onClick={() => {setbtnbool(!btnbool);
                    btnbool ? (setparadisp("none") ,setparadisp ("Show text"))
                    : (setparadisp(""),setparadisp("Hide text"));                     
                    }}>
                        
                        {btnbool} Button </button>
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




