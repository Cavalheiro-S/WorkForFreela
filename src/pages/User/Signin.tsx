import { Envelope, Lock } from "@phosphor-icons/react"
import { Form } from "../../components/Form"
import { Input } from "../../components/Input"

export const Signin = () => {
    return (
        <Form title="Entrar" subtitle="Informe os dados para entrar">
            <label htmlFor="">
                Email
                <Input.Root>
                    <Envelope className="w-6 h-6 text-gray-500" />
                    <Input.Input type="text" placeholder="example@email.com"/>
                </Input.Root>
            </label>
            <label htmlFor="">
                Senha
                <Input.Root>
                    <Lock className="w-6 h-6 text-gray-500" />
                    <Input.Input type="password" />
                </Input.Root>
            </label>
            <button className="w-full px-4 py-2 text-white rounded bg-primary place-self-end">Entrar</button>
        </Form>
    )
}
