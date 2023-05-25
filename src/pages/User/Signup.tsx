import { EnvelopeSimple, Lock } from "@phosphor-icons/react"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { Form } from "../../components/Form"

export const Signup = () => {
    return (
        <Form title="Criar Conta" subtitle="Informe seus dados para criar uma conta">
            <label htmlFor="">
                Nome
                <Input.Root>
                    <Input.Input type="text" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Email
                <Input.Root>
                    <EnvelopeSimple className="w-6 h-6 text-gray-500" />
                    <Input.Input type="email" placeholder="example@email.com" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Senha
                <Input.Root>
                    <Lock className="w-6 h-6 text-gray-500" />
                    <Input.Input type="password" placeholder="********" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Confirme a senha
                <Input.Root>
                    <Lock className="w-6 h-6 text-gray-500" />

                    <Input.Input type="password" placeholder="********" />
                </Input.Root>
            </label>
            <Button className="w-full">Avançar</Button>
        </Form>
    )
}
