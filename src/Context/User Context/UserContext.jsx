import { createContext, useEffect, useState } from "react";
import { onAuthStateChangedListener } from "../../Utility/firebase";
export const UserContext = createContext({
    currentUser: null,
})


function AuthProvider({children}) {
    const [currentUser, setCurrentUser] = useState('');

    useEffect(() => {
        const unsubscribed = onAuthStateChangedListener((user) => {
            setCurrentUser(user)
        })  
        return unsubscribed;
    },[]);
    const result = {
        currentUser,
    }
    
  return (
    <UserContext.Provider value={result}>{children}</UserContext.Provider>
  ) 
}

export default AuthProvider;
