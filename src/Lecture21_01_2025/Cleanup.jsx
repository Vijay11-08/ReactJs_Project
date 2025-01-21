import { useState, useEffect } from "react";
import { Promise, resolve } from "bluebird";
Promise.config({cancellation : true});

function FetchUser (){
    return new Promise(()=>{
        setTimeout(()=>{
            resolve({id : 1 , name : "Vijay"});
        },5000);
    });
}

function CancelRequest(){
    const [id ,setId] = useState("Loading....");
    const [name, setName] = useState("Loading....");

    useEffect(()=>{
        const promise = FetchUser().then((var1)=>{
            setId(var1.id);
            setName(var1.name);
        });
        return ()=>{
            promise.cancel();
        }
    });

    return (
        <div>
            <h1>User ID : {id}</h1>
            <h1>User Name : {name}</h1>
        </div>
    );
}

export default CancelRequest;