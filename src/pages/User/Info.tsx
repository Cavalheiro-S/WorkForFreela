import { Lock, Pencil } from "@phosphor-icons/react"
import { Button } from "../../components/Button"
import { useParams } from "react-router-dom"

export const Info = () => {
    const params = useParams<{ id: string }>()
    return (
        <div className="flex flex-col w-full gap-10">
            <h2 className="text-3xl">Perfil</h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Nome:</span>
                    <span>Nome do usuário {params.id}</span>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Email:</span>
                    <span>Email do usuário {params.id}</span>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Propostas Enviadas:</span>
                    <span>7 Propostas</span>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Propostas Realizadas</span>
                    <span>3 Projetos</span>
                </div>
            </div>
            <div className="flex gap-2">
                <Button color="secondary" className=" place-self-start">
                    <Lock />
                    Alterar Senha
                </Button>
                <Button className=" place-self-start">
                    <Pencil className="text-white" />
                    Editar Perfil
                </Button>
            </div>
        </div>
    )
}
