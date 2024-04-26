import React, { useState } from "react";
import UserContext from "./UserContext";

const userContextProvider= ({children})=>{

    const [user, setuser]= useState(null);

    return (
        <UserContext.Provider  value={{ user, setuser }} >
            {children}
        </UserContext.Provider>
    )
}


export default userContextProvider;