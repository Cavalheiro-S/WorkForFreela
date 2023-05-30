import { Envelope, Lock } from "@phosphor-icons/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Form } from "../../components/Form";
import { Input } from "../../components/Input";
import { Loading } from "../../components/Loading";
import { useAuth } from "../../hooks/useAuth";

interface Inputs {
    email: string;
    password: string;
}

export const Signin = () => {

    const { register, handleSubmit, formState: { errors } , setError } = useForm<Inputs>()
    const { signin, loading } = useAuth()
    const navigate = useNavigate()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { error, result } = await signin(data.email, data.password);
        if (result && !error) {
            toast.success("Logado com sucesso!")
            navigate("/")
        }
        else
            setError("email", { message: error.message, type: "manual" })
    }

    return loading ? <Loading /> : (
        <Form onSubmit={handleSubmit(onSubmit)} title="Entrar" subtitle="Informe os dados para entrar">
            <label htmlFor="">
                Email
                <Input.Root>
                    <Envelope className="w-6 h-6 text-gray-500" />
                    <Input.Input {...register("email", { required: true })} type="text" placeholder="example@email.com" />
                </Input.Root>
                {errors.email && errors.email.type === "required" && <Input.Error>Email inválido</Input.Error>}
                {errors.email && errors.email.type === "manual" && <Input.Error>{errors.email.message}</Input.Error>}
            </label>
            <label htmlFor="">
                Senha
                <Input.Root>
                    <Lock className="w-6 h-6 text-gray-500" />
                    <Input.Password {...register("password", { required: true, minLength: 6 })} />
                </Input.Root>
                {errors.password && <Input.Error>A senha deve ter no mínimo 6 caracteres</Input.Error>}
            </label>
            <button className="w-full px-4 py-2 text-white rounded bg-primary place-self-end">Entrar</button>
        </Form>
    )
}
