import React, { createContext, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
    const [formData, setFormData] = useState({
        principle: "",
        rate: "",
        time: ""
    });

    return (
        <UserContext.Provider value={{ formData, setFormData }}>
            {children}
        </UserContext.Provider>
    );
}
