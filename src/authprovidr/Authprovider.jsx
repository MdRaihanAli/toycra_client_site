import React, { createContext, useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';


export const AuthContext = createContext(null)

function Authprovider({children}) {
    const auth = getAuth(app)
    const [user, setUser] = useState(null)

    const rejister = ( email, password)=>{
      return  createUserWithEmailAndPassword(auth, email, password)
    }

    const login = ( email, password)=>{
      return  signInWithEmailAndPassword(auth, email, password)
    }

    const logout =()=>{
        return signOut(auth)
    }

useEffect(()=>{
    const unsubcribe = onAuthStateChanged(auth, curentUser=>{
        setUser(curentUser?.email);
    })
    return ()=>{
        unsubcribe()
    }
},[])


    const authInfo ={
        user,
        login,
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