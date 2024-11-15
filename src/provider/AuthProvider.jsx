import { createContext, useEffect, useState } from "react";

//import App from Firebase.config.js
import app from '../firebase/firebase.config'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

const auth = getAuth(app);

// Context API
export const AuthContext = createContext()


const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // Create User 
    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    };

    // Signin user
    const signInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    };

    // Sign Out User
    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    };

    // Update User profile
    const updateUserProfile = (update) => {
        return updateProfile(auth.currentUser, update)
    }

    const authInfo = {
        user,
        loading,
        setUser,
        createUser,
        logOut,
        signInUser,
        updateUserProfile,
        
    };

    // Observer
    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
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