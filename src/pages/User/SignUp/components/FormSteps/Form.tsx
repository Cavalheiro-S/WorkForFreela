import { Form } from '@/components/Form/Form';
import { Loading } from '@/components/Loading';
import { FormContext } from '@/contexts/FormContext';
import { useAuth } from '@/hooks/useAuth';
import { useContext } from 'react';
import { Control, FieldErrors, SubmitHandler, UseFormGetValues, UseFormRegister, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Step1 } from './Step1';
import { Step2 } from './Step2';
import { Contractor } from '@/services/interfaces/Contractor';
import { Hired } from '@/services/interfaces/Hired';


export interface Inputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    accountType: "contractor" | "hired"
    description?: string
    occupation?: string
    skills?: string
}

export interface StepInputProps {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
    getValues: UseFormGetValues<Inputs>
    control?: Control<Inputs>
}

export const FormSignUp = () => {
    const STEP_1 = "Login"
    const STEP_2 = "Contratante/Contratado"
    const { register, handleSubmit, formState: { errors, }, getValues, setError, control } = useForm<Inputs>()
    const { currentStep, setCurrentStep } = useContext(FormContext)
    const { signup, loading } = useAuth()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);
        if (currentStep === STEP_1)
            return setCurrentStep(STEP_2)
        const user = getUserType(data.accountType)
        const { result, error } = await signup(user, data.accountType);
        if (result && !error) {
            toast.success("Conta criada com sucesso!")
            navigate("/signin")
        }
        else
            setError("root", { message: error.message, type: "manual" })
    }

    const getUserType = (accountType: string) => {
        if(accountType === "hired")
            return {
                name: getValues("name"),
                email: getValues("email"),
                password: getValues("password"),
                description: getValues("description"),
                occupation: getValues("occupation"),
                skills: getValues("skills"),
            } as Hired
        else
            return {
                name: getValues("name"),
                email: getValues("email"),
                password: getValues("password"),
                confirmPassword: getValues("confirmPassword"),
            } as Contractor
    }

    return loading ? <Loading /> : (
        <Form
            className=""
            onSubmit={handleSubmit(onSubmit)}
            title="Criar Conta"
            subtitle="Informe seus dados para criar uma conta"
            steps={[
                {
                    title: STEP_1,
                    children: <Step1 errors={errors} getValues={getValues} register={register} />
                },
                {
                    title: STEP_2,
                    children: <Step2 errors={errors} getValues={getValues} register={register} control={control} />
                }
            ]}
        />
    )
}
