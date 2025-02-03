import { useState, useEffect } from "react";
import { Promise } from "bluebird";

Promise.config({cancellation: true});
function FetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: "Beast" });
        }, 5000);
    });
}
function CancelRequest() {
    const [id, setId] = useState("loading......")
    const [name, setName] = useState("loading......")
    useEffect(() => {
        const promise = FetchUser().then((var1) => {
            setId(var1.id);
            setName(var1.name);
        });
        return() => {
            promise.cancel(); // cancel the promise when component is destroyed
        };
    });
    return (
        <div>
            <h1>User ID: {id}</h1>
            <h2>User name: {name}</h2>
        </div>
    );
}
export default CancelRequest;