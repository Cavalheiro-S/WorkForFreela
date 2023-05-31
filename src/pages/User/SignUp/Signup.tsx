import { useContext } from 'react'
import { Control, FieldErrors, SubmitHandler, UseFormGetValues, UseFormRegister, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Form } from '../../../components/Form/Form'
import { Loading } from '../../../components/Loading'
import { FormContext } from '../../../contexts/FormContext'
import { useAuth } from '../../../hooks/useAuth'
import { Step1 } from './FormSteps/Step1'
import { Step2 } from './FormSteps/Step2'

export interface Inputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    accountType: "contractor" | "hired"
    description?: string
    skills?: {value: string, label: string}[]
}

export interface StepInputProps {
    register: UseFormRegister<Inputs>
    errors: FieldErrors<Inputs>
    getValues: UseFormGetValues<Inputs>
    control?: Control<Inputs>
}

export const Signup = () => {
    const { register, handleSubmit, formState: { errors, }, getValues, setError, control } = useForm<Inputs>()
    const { currentStep, setCurrentStep } = useContext(FormContext)
    const { signup, loading } = useAuth()
    const navigate = useNavigate()
    const STEP_1 = "Login"
    const STEP_2 = "Contratante/Contratado"

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        console.log(data);

        if (currentStep === STEP_1)
            return setCurrentStep(STEP_2)
        const { result, error } = await signup(data.email, data.password);
        if (result && !error) {
            toast.success("Conta criada com sucesso!")
            navigate("/signin")
        }
        else
            setError("root", { message: error.message, type: "manual" })
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
