import { Button } from "@/components/Button"
import { useApiService } from "@/hooks/useApiService"
import { Project } from "@/services/interfaces/Project"
import { Propose } from "@/services/interfaces/Propose"
import { Trash } from "@phosphor-icons/react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"

interface ProposeCardProps {
    id: string
    description: string
    value: number
    deadline: string
    project: Project
}

export const ProposeCard = ({ description, value, deadline, project, id }: ProposeCardProps) => {

    const navigate = useNavigate()
    const { deleteData } = useApiService()

    const handleDelete = async () => {
        try {
            if (!id) return
            await deleteData<Propose>("propose", id)
            toast.success("Proposta deletada com sucesso!")
            navigate(0)
        }
        catch (err) {
            console.log(err)
            toast.error("Falha ao deletar proposta!")
        }
    }

    return (
        <div className="flex flex-col w-[600px] gap-3 p-6 transition border rounded hover:border-primary">
            <div className="space-y-3">
                <h3 className="font-semibold">{project.name}</h3>
                <div className="flex gap-10">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Valor Orçamento:</span>
                        <span className="">R$ {value}</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Prazo:</span>
                        <span className="">{deadline}</span>
                    </div>
                </div>
                <p className="text-sm">{description}</p>
            </div >
            <div className="flex justify-end">
                <Button className="self-end">Editar Proposta</Button>
                <Button color="danger" className="px-2" onClick={handleDelete}>
                    <Trash className="w-6 h-6 text-red" />
                </Button>
            </div>
        </div >
    )
}
