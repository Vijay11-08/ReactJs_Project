import React, { useState } from "react";
import { UserProvider } from "./1st";
import { Page1, Page2, Page3, Page4 } from "./2nd";

export default function App() {
    const [currentPage, setCurrentPage] = useState(0);
    
    const pages = [
        <Page1 key="1" nextPage={() => setCurrentPage(1)} />,
        <Page2 key="2" nextPage={() => setCurrentPage(2)} prevPage={() => setCurrentPage(0)} />,
        <Page3 key="3" nextPage={() => setCurrentPage(3)} prevPage={() => setCurrentPage(1)} />,
        <Page4 key="4" prevPage={() => setCurrentPage(2)} />
    ];

    return (
        <UserProvider>
            <div>{pages[currentPage]}</div>
        </UserProvider>
    );
}
