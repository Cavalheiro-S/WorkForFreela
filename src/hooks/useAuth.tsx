import { FirebaseError } from "firebase/app";
import {
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
} from "firebase/auth";
import { useState } from "react";
import { auth, returnErrorMessage } from "../services/firebase";

export const useAuth = () => {
    const [loading, setLoading] = useState(false);
    const { currentUser } = auth;

    async function execute<T>(fn: () => Promise<T>) {
        try {
            setLoading(true);
            const result = await fn();
            return { result, error: undefined };
        } catch (err) {
            const error = verifyErrorType(err);
            return { result: undefined, error };
        } finally {
            setLoading(false);
        }
    }

    const verifyErrorType = (error: unknown): Error | FirebaseError => {
        if (error instanceof Error) {
            error.message = "Não foi possível acessar o servidor!";
            if (error instanceof FirebaseError)
                error.message = returnErrorMessage(error.code);
            return error;
        }
        return new Error("Não foi possível acessar o servidor!");
    }

    const signup = async (email: string, password: string) => {
        const result = await execute<UserCredential>(() =>
            createUserWithEmailAndPassword(auth, email, password)
        );
        return result;
    };

    const signin = async (email: string, password: string) => {
        const result = await execute<UserCredential>(() =>
            signInWithEmailAndPassword(auth, email, password)
        );
        return result;
    };

    const signout = async () => {
        await execute<void>(() => signOut(auth));
    };

    const resetPassword = async (email: string) => {
        const result = await execute<void>(() => sendPasswordResetEmail(auth, email));
        return result;
    };

    return { signup, signin, signout, resetPassword, isAutenticated : currentUser ? true : false, loading };
};