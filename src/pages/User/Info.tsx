import { Button } from "@/components/Button"
import { useApiService } from "@/hooks/useApiService"
import { useAuth } from "@/hooks/useAuth"
import { Contractor } from "@/services/interfaces/Contractor"
import { Hired } from "@/services/interfaces/Hired"
import { Lock } from "@phosphor-icons/react"
import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export const Info = () => {

    const { getDataById } = useApiService()
    const { user: userAuth } = useAuth()
    const [user, setUser] = useState<Contractor | Hired>()
    const params = useParams<{ id: string }>()

    useEffect(() => {

        const getUser = async () => {
            if (params.id === undefined) return
            let userData: Contractor | Hired | undefined
            if (userAuth?.type == "contractor") {
                userData = (await getDataById<Contractor>("contractor", params.id)).data
            }
            else
                userData = await (await getDataById<Hired>("hired", params.id)).data

            setUser(userData)
        }

        getUser()

    }, [params.id])

    return (
        <div className="flex flex-col w-full gap-10">
            <h2 className="text-3xl">Perfil</h2>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Nome:</span>
                    <span>{user?.name}</span>
                </div>

                <div className="flex flex-col gap-2">
                    <span className="text-gray-500">Email:</span>
                    <span>{user?.email}</span>
                </div>
            </div>
            <div className="flex justify-between w-full gap-2 md:w-fit">
                <Button aschild={true} className=" place-self-start">
                    <Link to="/user/recoverPassword" className="flex items-center gap-2">
                        <Lock />
                        Alterar Senha
                    </Link>
                </Button>
            </div>
        </div>
    )
}
