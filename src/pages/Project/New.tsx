import { Form } from "../../components/Form"
import { Input } from "../../components/Input"
import { Select } from "../../components/Select"

export const ProjectNew = () => {

    const options = [
        { value: 'frontend', label: 'Front-End' },
        { value: 'backend', label: 'Back-End' },
        { value: 'fullstack', label: 'Full-Stack' }
    ]

    return (
        <Form title="Criar Projeto" subtitle="Informe os dados do serviço que você quer cadastrar">
            <label htmlFor="">
                Nome
                <Input.Root>
                    <Input.Input type="text" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Descrição
                <Input.Root>
                    <Input.Input type="text" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Valor
                <Input.Root>
                    <Input.Input type="number" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Prazo
                <Input.Root>
                    <Input.Input type="date" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Categoria
                <Select placeholder="Escolha uma ou mais categorias" options={options} />
            </label>
            <button className="w-full px-4 py-2 text-white rounded bg-primary place-self-end">Cadastrar Projeto</button>
        </Form>

    )
}
