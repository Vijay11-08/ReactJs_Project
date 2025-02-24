// create 3 stage form with following
// page 1: ask user to enter Principale(10,000)
// page 2: ask user to enter Reate of Interest (7)
// page 3: ask user to enter Durations (1 year)
// page 4: show total amount of including  of interest

import { resolve } from "bluebird";
import * as React from 'react';
export const IntrestContext = React.createContext();

function Interest(){
    return new Promise(()=>{
        setTimeout(()=>{
            resolve({amount : 10000, interest: 7, duration : "1 year"});
        },3000);
    });
}

export function UserInterest({children}){
    
    const [duration, setDuration]= React.useState();
    const [principal, setPrincipal]= React.useState(10000);
    const [rate, setRate]= React.useState(7);
    const[total,setTotal]= React.useState();

    React.useEffect(()=>{
        setInterest(Interest(principal, rate, duration));
    },[principal, rate, duration]);

    return(
        <div>
            <h1>Interest Calculator</h1>
            <form>
                <label>Principal:</label>
                <input type="number" value={principal} onChange={(e) => setPrincipal(Number(e.target.value))} />
                <br/>
                <label>Rate of Interest:</label>
                <input type="number" value={rate} onChange={(e) => setRate(Number(e.target.value))} />
                    <br/>
                    <label>Duration:</label>
                    <input type="text" value={duration} onChange={(e) => setDuration(e.target.value)} />
                    <br/>
                    <button type="submit">Calculate</button>
                    </form>
                    
        </div>,
        <IntrestContext.Provider value={{interest}}>
            {children}
        </IntrestContext.Provider>
    );
}