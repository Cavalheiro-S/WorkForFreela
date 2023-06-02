import { Form } from "@/components/Form/Form"
import { Input } from "@/components/Input"
import { Select } from "@/components/Select"

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
                    <Input.Input type="text" placeholder="Ex: Sistema de Contabilidade"/>
                </Input.Root>
            </label>
            <label htmlFor="">
                Descrição
                <Input.Root>
                    <Input.TextArea className="h-20" placeholder="Ex : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam, sit amet consequat sapien. Vestibulum sagittis vitae dui imperdiet egestas. Fusce vitae eros nulla." />
                </Input.Root>
            </label>
            <label htmlFor="">
                Valor
                <Input.Root>
                    <Input.Money placeholder="R$ 500.00" />
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
