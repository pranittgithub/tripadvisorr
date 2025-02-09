import { createContext, useState, useEffect } from "react";
import {
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../../Service/Firebase";
import { set } from "nprogress";

export const LogInContext = createContext(null);

export const LogInContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [trip, setTrip] = useState([]);

  // Listen for Firebase authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        setIsAuthenticated(true);
      } else {
        setUser(null);
        setIsAuthenticated(false);
      }
    });
    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  const handleSignUp = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      // User signed up successfully
      setUser(userCredential.user);
      setIsAuthenticated(true);
      console.log("User signed up:", user);
    } catch (error) {
      console.error("Error during sign-up:", error);
    }
  };

  const handleSignIn = async () => {
    console.log("Signing in...");
    try {
      const provider = new GoogleAuthProvider();
      const userCredential = await signInWithPopup(auth, provider);
      setUser(userCredential.user);
      setIsAuthenticated(true);
      console.log("User signed in:", userCredential.user);
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error during sign-out:", error);
    }
  };

  return (
    <LogInContext.Provider
      value={{
        user,
        isAuthenticated,
        handleSignIn,
        handleSignUp,
        handleSignOut,
        trip,
        setTrip,
      }}
    >
      {children}
    </LogInContext.Provider>
  );
};
