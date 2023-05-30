import { FirebaseError } from "firebase/app";
import { UserCredential, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
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
            if (err instanceof Error) {
                console.log(err.message);
                err.message = "Não foi possível acessar o servidor!";
                if (err instanceof FirebaseError) {
                    err.message = returnErrorMessage(err.code);
                }
                return { result: undefined, error: err };
            }
            return {
                result: undefined,
                error: new Error("Não foi possível acessar o servidor!"),
            };
        } finally {
            setLoading(false);
        }
    }

    const signup = async (email: string, password: string) => {
        const user = await execute<UserCredential>(() =>
            createUserWithEmailAndPassword(auth, email, password)
        );
        return user;
    };

    const signin = async (email: string, password: string) => {
        const user = await execute<UserCredential>(() =>
            signInWithEmailAndPassword(auth, email, password)
        );
        return user;
    };

    const signout = async () => {
        await execute(() => signOut(auth));
    };

    return { signup, signin, signout, currentUser, loading };
};