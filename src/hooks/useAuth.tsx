import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../services/firebase";

export const useAuth = () => {

    const { currentUser } = auth

    const signup = async (email: string, password: string) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signin = async (email: string, password: string) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signout = async () => {
        return signOut(auth)
    }
    return { signup, signin, signout, currentUser }
}