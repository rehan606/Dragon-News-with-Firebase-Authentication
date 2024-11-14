import { createContext, useEffect, useState } from "react";

//import App from Firebase.config.js
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

const auth = getAuth(app);

// Context API
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // Create User 
    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Signin user
    const signInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // Sign Out USer
    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        signInUser,
    }

    // Observer
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
        })

        return () => {
            unSubscribe();
        }

    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;