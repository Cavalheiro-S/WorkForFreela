import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const returnErrorMessage = (code: string) => {

    switch (code) {
        case 'auth/invalid-email':
            return 'Email inválido';
        case 'auth/user-disabled':
            return 'Usuário desabilitado';
        case 'auth/user-not-found':
            return 'Usuário não encontrado';
        case 'auth/wrong-password':
            return 'Senha incorreta';
        case 'auth/email-already-in-use':
            return 'Email já está em uso';
        case 'auth/weak-password':
            return 'Senha fraca';
        default:
            return 'Erro encontrado';
    }
}