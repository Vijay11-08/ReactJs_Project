import { Children, useState } from "react";
import { UserProvider } from "./file1";
import { Page1,Page2,Page3 } from "./file2";
import { Page4,Page5 } from "./file4";

function SelectPage({i}){
    const Page = [Page1,Page2,Page3,Page4,Page5][i];
    return <Page/>;
}

export default function UserContextExample(){
    const [currentPage,setCurrentPage] = useState(0);
    return (
    <UserProvider>
        <button onClick={() => {setCurrentPage(0)}} disabled = {currentPage === 0}>
            Page1
        </button>

        <button onClick={() => {setCurrentPage(1)}} disabled = {currentPage === 1}>
            Page2
        </button>

        <button onClick={() => {setCurrentPage(2)}} disabled = {currentPage === 2}>
            Page3
        </button>
        
        <button onClick={() => {setCurrentPage(3)}} disabled = {currentPage === 3}>
            Page4
        </button>

        <button onClick={() => {setCurrentPage(4)}} disabled = {currentPage === 4}>
            Page5
        </button>
        
        <SelectPage i={currentPage}/>
    
    </UserProvider>
    );
}

