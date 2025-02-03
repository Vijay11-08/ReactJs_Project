import { useState } from "react";
import Cricket from "./Excersize2";


const ShowUser = ({var3})=>
     (var3 ? <Cricket/> : null);

function DataTableCricket(){
    const [Save, setSave] = useState(false);
    return(
        <>
            <button onClick={()=> setSave(!Save)}>
                {Save ? "Hide User" : "Show User"}
            </button>
        
        <ShowUser var3={Save} />
        </>
    );
}

export default DataTableCricket;