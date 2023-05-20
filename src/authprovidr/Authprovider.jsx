import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
export const AuthContext = createContext(null)

function Authprovider({children}) {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)
    const [loding , setLoding]= useState(true)

    

    const rejister = ( email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }
    const nameudater=()=>{
     return updateProfile()
    }

    const googleLogin =()=>{
    return signInWithPopup(auth, provider)
    }

    const login = ( email, password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const logout =()=>{
        return signOut(auth)
    }

useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, curentUser=>{
        setUser(curentUser);
        setLoding(false)
    })
    return ()=>{
        unsubcribe()
    }
},[])


    const authInfo ={
        user,
        loding,
        auth,
        nameudater,
        login,
        googleLogin,
        rejister,
        logout
    }
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  )
}

export default Authprovider