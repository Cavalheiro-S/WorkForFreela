import { FirebaseError } from "firebase/app";
import {
    UserCredential,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import { useContext, useState } from "react";
import { auth, returnErrorMessage } from "../services/firebase";
import { useApiService } from "./useApiService";
import { Contractor } from "@/services/interfaces/Contractor";
import { AuthContext, UserWithType } from "@/contexts/AuthContext";
import { Hired } from "@/services/interfaces/Hired";

export const useAuth = () => {
    const { createData, getDataById } = useApiService();
    const [loading, setLoading] = useState(false);
    const { setUser, user } = useContext(AuthContext);
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

    const signup = async (user: Contractor | Hired, type: "contractor" | "hired") => {

        const result = await execute<UserCredential>(() =>
            createUserWithEmailAndPassword(auth, user.email, user.password)
        );

        if (type == "contractor") {
            saveUserAsContractor({ ...user, id: result.result?.user.uid } as Contractor);

        }
        else {
            saveUserAsHired({ ...user, id: result.result?.user.uid } as Hired);
        }
        setUser({ ...result.result?.user, type } as UserWithType)
        return result;
    };

    const signin = async (email: string, password: string) => {
        const result = await execute<UserCredential>(() =>
            signInWithEmailAndPassword(auth, email, password)
        );
        if (result.result?.user.uid) {
            const userType = await getUserType(result.result.user.uid)
            setUser({ ...result.result?.user, type: userType } as UserWithType)
        }

        return result;
    };

    const signout = async () => {
        await execute<void>(() => signOut(auth));
    };

    const resetPassword = async (email: string) => {
        const result = await execute<void>(() => sendPasswordResetEmail(auth, email));
        return result;
    };

    const signinWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await execute<UserCredential>(() =>
            signInWithPopup(auth, provider)
        );
        return result;
    }

    const getUserType = async (id: string) => {
        const result = await execute(() => getDataById<Contractor>("contractor", id))
        console.log("user type", result);

        if (result.error == undefined) {
            return "contractor";
        }
        return "hired";
    }

    const saveUserAsContractor = async (user: Contractor) => {
        const data = await createData<Contractor>("contractor", {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
        });
        return data;
    }

    const saveUserAsHired = async (user: Hired) => {
        const data = await createData<Hired>("hired", {
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            description: user.description,
            occupation: user.occupation,
            skills: user.skills,
        });
        return data;
    }
    return { signup, signin, signinWithGoogle, signout, getUserType, resetPassword, isAutenticated: currentUser ? true : false, loading, user, currentUser };
};