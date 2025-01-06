import {useState} from "react";

function HookExcersize() {
const [name,setname]= useState("Hook Example2");
const [age,setage]= useState(45);
const [color,setcolor]= useState("green");
const [style,setstyle]= useState(" ");
const [bld,setbld]= useState(100);
const [itl,setitl]= useState(" ");
const [udn,setudn]=useState(" ");   

// color example 

    return (
        <div>
            <h1 style={{color:color,fontStyle:style,textDecoration:style}}> {name} </h1>
        <h1>{name}</h1>
            <input type="text" 
            value={name} 
            onChange={(e)=>setname(e.target.value)}
            />
        <h1>{age}</h1>
            <input type="text" 
            value={age} 
            onChange={(e)=>setage(e.target.value)}
            />
        <h1>{color}</h1>
            <input type="radio"
            name="color" 
            value="green"
            onChange={()=>setcolor("green")}
            /> {"green"}
            <br />
            <input type="radio"
            name="color" 
            value="Yellow"
            onChange={()=>setcolor("Yellow")}

            /> {"Yellow"}

            <br />

             <input type="radio"
            name="color" 
            value="Red"
            onChange={()=>setcolor("Red")}

            /> {"Red"}
            <br />
         for using chcekbox font style chage bold italic and underline 
         
                    <h1>{style}</h1>
            <input type="checkbox" name="style" value={"bold"} onChange={() => setstyle("bold")} />
            {"Bold"}
            <br />
            <input type="checkbox" name="style" value={"italic"} onChange={() => setstyle("Italic")} />
            {"Italic"}
            <br />
            <input type="checkbox" name="style" value={"underline"} onChange={() => setstyle("underline") }/>
            {"underline"}
            <br />
            <p style={{color:color,fontStyle:style,textDecoration:style,fontWeight:style}}>This is the text that content for color display</p>
        
            <input type="checkbox" onClick={(e)=>setbld(e.target.checked) ? 900:100}/>
            <input type="checkbox" onClick={(e)=>setitl(e.target.checked) ? "Italic":""}/>
            <input type="checkbox" onClick={(e)=>setudn(e.target.checked) ? "underline":""}/>
            <p style={{color:color,fontStyle:itl,textDecoration:udn,fontWeight:bld}}>Vijay</p>

        </div>
    );
}


export default HookExcersize;

// For Output Use Main.jsx

// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import HookExcersize from './Lecture06_01_2025/HookExcersize'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <HookExcersize/>
//   </StrictMode>,
// )




