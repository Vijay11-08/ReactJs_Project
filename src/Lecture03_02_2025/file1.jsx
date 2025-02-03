import { resolve } from "bluebird";
import * as  React from "react";
export const UserContext = React.createContext();

function FetchUser(){
    return new Promise(()=>{
        setTimeout(()=>{
            resolve({name : "Vijay",id:"1"});
        },3000);
    });
}

export function UserProvider({children}) {
    const [user, setUser] = React.useState({
        name: "Loading....",
        id: "Loading....",
    });
    React.useEffect(()=>{
        FetchUser().then((data)=> setUser(data));
    },[]);

    // context provided to the childrens all that use this function or data
    return <UserContext.Provider value={{user}}>{children}</UserContext.Provider>;
}