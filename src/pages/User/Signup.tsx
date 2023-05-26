import { EnvelopeSimple, Lock } from "@phosphor-icons/react"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Form } from "../../components/Form"
import { SubmitHandler, useForm } from "react-hook-form"
import { useAuth } from "../../hooks/useAuth"
import { toast } from "react-toastify"
import { useNavigate } from "react-router-dom"

interface Inputs {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export const Signup = () => {

    const { register, handleSubmit, formState: { errors }, getValues } = useForm<Inputs>()
    const { signup } = useAuth()
    const navigate = useNavigate()
    
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try{
            await signup(data.email, data.password);
            toast.success("Conta criada com sucesso!")
            navigate("/signin")
        }
        catch(err){
            console.log(err)
            toast.warning("Falha ao criar conta")
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} title="Criar Conta" subtitle="Informe seus dados para criar uma conta">
            <label htmlFor="">
                Nome
                <Input.Root>
                    <Input.Input {...register("name", { required: true, minLength: 4 })} type="text" />
                </Input.Root>
                {errors.name && <Input.Error>O nome deve ter no mínimo 4 caracteres</Input.Error>}
            </label>
            <label htmlFor="">
                Email
                <Input.Root>
                    <EnvelopeSimple className="w-6 h-6 text-gray-500" />
                    <Input.Input {...register("email", { required: true })} type="email" placeholder="example@email.com" />
                </Input.Root>
                {errors.email && <Input.Error>Email inválido</Input.Error>}
            </label>
            <label htmlFor="">
                Senha
                <Input.Root>
                    <Lock className="w-6 h-6 text-gray-500" />
                    <Input.Input {...register("password", { required: true, minLength: 6 })} type="password" placeholder="********" />
                </Input.Root>
                {errors.password && <Input.Error>A senha deve ter no mínimo 6 caracteres</Input.Error>}
            </label>
            <label htmlFor="">
                Confirme a senha
                <Input.Root>
                    <Lock className="w-6 h-6 text-gray-500" />
                    <Input.Input {...register("confirmPassword", { validate: value => getValues("password") === value })} type="password" placeholder="********" />
                </Input.Root>
                {errors.confirmPassword && <Input.Error>As senhas não coincidem</Input.Error>}
            </label>
            <Button className="w-full">Avançar</Button>
        </Form>
    )
}
