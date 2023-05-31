import { createContext, useEffect, useState } from "react";

interface FormContextData {
    currentStep: string;
    setCurrentStep: React.Dispatch<React.SetStateAction<string>>;
}

interface FormProviderProps {
    children: React.ReactNode;
}

export const FormContext = createContext({} as FormContextData);

export const FormProvider = ({ children }: FormProviderProps) => {
    const [currentStep, setCurrentStep] = useState("")

    const state = {
        currentStep,
        setCurrentStep
    }

    return (
        <FormContext.Provider value={state}>
            {children}
        </FormContext.Provider>
    )

}   