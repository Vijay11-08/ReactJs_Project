//  2. Pass array  of strings arguments 
//     Convert Array To Unorderedlist

import * as React from "react";

function ConvertArrayToList(array) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(array);
        }, 4000); // Simulates an API delay
    });
}

function ArrayToUnorderedList() {
    const [listItems, setListItems] = React.useState("Loading...");

    React.useEffect(() => {
        ConvertArrayToList(["Apple", "Banana", "Cherry", "Date"]).then((data) => {
            setListItems(data);
        });
    },);

    return (
        <div>
            <h3>Unordered List:</h3>
            {Array.isArray(listItems) ? (
                <ul>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            ) : (
                <p>{listItems}</p>
            )}
        </div>
    );
}

export default ArrayToUnorderedList;


// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'

// import ArrayToUnorderedList from './Lecture18_01_2025/UseEffactExcersize2'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
// <ArrayToUnorderedList/>
//   </StrictMode>,
// )