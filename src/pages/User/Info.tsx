import { Button } from "@/components/Button"
import { AuthContext } from "@/contexts/AuthContext"
import { Lock, Pencil } from "@phosphor-icons/react"
import { useContext } from "react"
import { Link } from "react-router-dom"

export const Info = () => {
    const { user } = useContext(AuthContext)

    return (
        <div className="flex flex-col w-full gap-10">
            <h2 className="text-3xl">Perfil</h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Nome:</span>
                    <span>{user?.uid}</span>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Email:</span>
                    <span>{user?.email}</span>
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
            <div className="flex justify-between w-full gap-2 md:w-fit">
                <Button asChild color="secondary" className=" place-self-start">
                    <Link to="/user/recoverPassword" className="flex items-center gap-2">
                        <Lock />
                        Alterar Senha
                    </Link>
                </Button>
                <Button className=" place-self-start">
                    <Pencil className="text-white" />
                    Editar Perfil
                </Button>
            </div>
        </div>
    )
}
