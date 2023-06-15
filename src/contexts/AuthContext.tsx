import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, ReactNode, useEffect, useState } from "react";
import { auth } from "../services/firebase";

interface AuthContextData {
    user: UserWithType | null;
    setUser: React.Dispatch<React.SetStateAction<UserWithType | null>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: Error | undefined;
    setError: React.Dispatch<React.SetStateAction<Error | undefined>>;
}

interface AuthProviderProps {
    children: ReactNode;
}

export interface UserWithType extends User {
    type: "contractor" | "hired"
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: AuthProviderProps) => {

    const [user, setUser] = useState<UserWithType | null>(null);
    const [error, setError] = useState<Error>()
    const [loading, setLoading] = useState(true);
    const state = {
        user,
        setUser,
        loading,
        setLoading,
        error,
        setError
    }

    useEffect(() => {
        setLoading(true);
        const unsubscribe = onAuthStateChanged(auth, user => {
            setLoading(false);
            if (user) {
                setUser({ ...user, type: "contractor" } as UserWithType)
                return;
            }
            setUser({} as UserWithType)
        })

        return unsubscribe;
    }, [])

    return (
        <AuthContext.Provider value={state}>
            {children}
        </AuthContext.Provider>
    )
}