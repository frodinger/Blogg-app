import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebase";
import React, { createContext, useState, useEffect } from "react";

// Skapa en ny kontext
export const AuthContext = createContext();

export function useAuth() {
    return useContext(AuthContext);
  }  

// Skapa en komponent som innehåller state du vill dela
export const AuthProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  const initializeUser = (user) => {
    setLoading(true);
    if (user) {
      setCurrentUser(user);
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  };

  const values = { currentUser, userLoggedIn };

  return (
    <AuthContext.Provider value={values}>
      {!loading && children}
    </AuthContext.Provider>
  );
};