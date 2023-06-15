import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { useApiService } from '@/hooks/useApiService'
import { useAuth } from '@/hooks/useAuth'
import { Propose } from '@/services/interfaces/Propose'
import { formatInputMoney } from '@/utils'
import { useEffect } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

interface Inputs {
    description: string
    value: string
    deadline: string
}

interface ProposeModalFormProps {
    id?: string
    projectId: string
}

export const ProposeModalForm = ({ id, projectId }: ProposeModalFormProps) => {
    const { register, handleSubmit, setValue } = useForm<Inputs>()
    const { getDataById, updateData, createData } = useApiService()
    const { user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {

        if (!id) return
        const getResource = async () => {
            const data = await getDataById<Propose>("propose", id)
            setValue("description", data.data?.description ?? "")
            setValue("value", data.data?.value.toString() ?? "")
            setValue("deadline", data.data?.deadline.toDateString() ?? "")
        }
        getResource()
    }, [id])

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        try {

            const dataTransformed: Propose = {
                description: data.description,
                value: formatInputMoney(data.value),
                deadline: new Date(data.deadline),
                idHired: user?.uid,
                idProject: projectId,
            } as Propose

            if (!id)
                await createData<Propose>("propose", dataTransformed)
            else
                await updateData<Propose>("propose", id, dataTransformed)

            toast.success("Proposta enviada com sucesso!")
            navigate("/project/proposes")
        }
        catch (err) {
            console.log(err)
            toast.error("Não foi possível enviar a proposta")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 w-[400px] pt-4 text-sm">
            <label className="flex flex-col gap-2">
                Descrição
                <Input.Root>
                    <Input.TextArea
                        {...register("description", { required: true })}
                        className="h-24"
                        placeholder="Escreva uma propose contendo todos os detalhes que podem interessar o contractor" />
                </Input.Root>
                <span className="self-end text-sm">Máx de 200 caracteres</span>
            </label>
            <label className="flex flex-col gap-2">
                Valor
                <Input.Root>
                    <Input.Money {...register("value")} placeholder="R$ 500.00" />
                </Input.Root>
            </label>
            <label className="flex flex-col gap-2">
                Data de entrega
                <Input.Root>
                    <Input.Input {...register("deadline")} type='date' placeholder="30/03/2023" />
                </Input.Root>
            </label>
            <Button className="self-end">Enviar Proposta</Button>
        </form>
    )
}
