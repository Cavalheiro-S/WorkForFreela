import { Envelope, Lock } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";

interface Inputs {
    email: string;
    password: string;
}

export const Signin = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()
    const { signin } = useAuth()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {
            await signin(data.email, data.password);
            toast.success("Logado com sucesso!")
            navigate("/")
        }
        catch (err) {
            console.log(err)
            toast.warning("Falha ao logar na conta")
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} title="Entrar" subtitle="Informe os dados para entrar">
            <label htmlFor="">
                Email
                <Input.Root>
                    <Envelope className="w-6 h-6 text-gray-500" />
                    <Input.Input {...register("email", { required: true })} type="text" placeholder="example@email.com" />
                </Input.Root>
                {errors.email && <Input.Error>Email inválido</Input.Error>}
            </label>
            <label htmlFor="">
                Senha
                <Input.Root>
                    <Lock className="w-6 h-6 text-gray-500" />
                    <Input.Input {...register("password", { required: true, minLength: 6 })} type="password" />
                </Input.Root>
                {errors.password && <Input.Error>A senha deve ter no mínimo 6 caracteres</Input.Error>}
            </label>
            <button className="w-full px-4 py-2 text-white rounded bg-primary place-self-end">Entrar</button>
        </Form>
    )
}
