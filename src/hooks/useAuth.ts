import { useState } from "react";
import { auth } from "../config/firebase";
import { User, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
    
    const useAuth = () => {
        const [user, setUser] = useState<User | null>(null)
    
        const signup = async (email: string, password: string) => {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                setUser(userCredential.user);
            } catch (error) {
                console.error('registration failed', error)
            }
        }
    
        //login
    
        const login = async (email: string, password: string) => {
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                setUser(userCredential.user)
                console.log(userCredential)
            } catch (error) {
                console.error('Login failed', error)
            }
        }
    
        // logout
    
        const logOut = async () => {
            try {
                await signOut(auth);
                setUser(null)
            } catch (error) {
                console.error('Logout failed', error)
            }
        }
    
        return { user, signup, login, logOut };
    }          
export default useAuth