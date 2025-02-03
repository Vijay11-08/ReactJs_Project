import { useState, useEffect } from "react";
import { Promise } from "bluebird";

Promise.config({cancellation: true});
function FetchUser(){
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({name : "Vijay" , Gender : "male" , Email : "vijay@gmail.com" ,match : "T20", Password : "Vijay@1108",country : "India" });
        }, 5000);
    });
}
function Cricket() {
    const [name, setName] = useState("Loading....");
    const[Gender,setGender] = useState("Loading....");
    const[email, setEmail] = useState("Loading....");
    const[match, setMatch] = useState("Loading....");
    const[password, setPassword] = useState("Loading....");
    const[country, setCountry] = useState("Loading....");
    

    useEffect(() => {
        const promise = FetchUser().then((var1) => {
            setName(var1.name);
            setGender(var1.Gender);
            setEmail(var1.Email);
            setMatch(var1.match);
            setPassword(var1.Password);
            setCountry(var1.country);
        });
        return() => {
            promise.cancel(); // cancel the promise when component is destroyed
        };
    });
    return (
        <div>
        <table border={2}>
         <tr>
             <th>Name</th>
             <td>{name}</td>
         </tr>
         <tr>
             <th>Gender</th>
             <td>{Gender}</td>
         </tr>
         <tr>
             <th>Email</th>
             <td>{email}</td>
         </tr>
         <tr>
             <th>Match</th>
             <td>{match}</td>
         </tr>
         <tr>
             <th>Password</th>
             <td>{password}</td>
         </tr>
         <tr>
             <th>Country</th>
             <td>{country}</td>
         </tr>
        </table>
     </div>
    );
}
export default Cricket;