import { Button } from "@/components/Button"
import { Form } from "@/components/Form/Form"
import { Input } from "@/components/Input"
import { Select } from "@/components/Select"
import { useApiService } from "@/hooks/useApiService"
import { useAuth } from "@/hooks/useAuth"
import { Project } from "@/services/interfaces/Project"
import { formatInputMoney } from "@/utils"
import { useEffect } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

interface Inputs {
    name: string
    description: string
    value: string
    deadline: string
    category: number
}

export const ProjectNew = () => {

    const { createData, getDataById } = useApiService()
    const navigate = useNavigate()
    const { user } = useAuth()

    const options = [
        { value: 1, label: "Back End" },
        { value: 2, label: "Front End" },
        { value: 3, label: "Banco de Dados" },
    ]

    const { register, handleSubmit } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {

            const dataTransformed = {
                idContractor: user?.uid,
                category: data.category,
                name: data.name,
                description: data.description,
                value: formatInputMoney(data.value),
                deadline: new Date(data.deadline),
            } as Project

            await createData<Project>("project", dataTransformed)
            toast.success("Projeto criado com sucesso!")
            navigate("/")
        }
        catch (err) {
            toast.error("Não foi possível criar o projeto")
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)} title="Criar Projeto" subtitle="Informe os dados do serviço que você quer cadastrar">
            <label htmlFor="">
                Nome
                <Input.Root>
                    <Input.Input {...register("name")} type="text" placeholder="Ex: Sistema de Contabilidade" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Descrição
                <Input.Root>
                    <Input.TextArea {...register("description")} minLength={50} className="h-20" placeholder="Ex : Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin a placerat quam, sit amet consequat sapien. Vestibulum sagittis vitae dui imperdiet egestas. Fusce vitae eros nulla." />
                </Input.Root>
            </label>
            <label htmlFor="">
                Valor
                <Input.Root>
                    <Input.Money {...register("value")} placeholder="R$ 500.00" />
                </Input.Root>
            </label>
            <label htmlFor="">
                Prazo
                <Input.Root>
                    <Input.Input {...register("deadline")} type="date" />
                </Input.Root>
            </label>
            <label className="flex flex-col" htmlFor="">
                Categoria
                <Select {...register("category")} options={options} placeholder="Escolha uma categoria" />
            </label>
            <Button>Cadastrar Projeto</Button>
        </Form>

    )
}
