import { Link, useNavigate } from "react-router-dom"
import WorkForFreelaLogo from "../assets/workforfreela_logo.svg"
import { useAuth } from "../hooks/useAuth"
import { toast } from "react-toastify"

export const Header = () => {

    const { currentUser, signout } = useAuth()
    const navigate = useNavigate()

    const handleSignout = async () => {
        try {
            await signout()
            navigate('/')
        } catch (error) {
            toast.error('Falha ao sair')
            console.log(error)
        }
    }
    return (
        <header className="grid items-center justify-center h-24 grid-cols-3 px-20 text-sm text-gray-800 shadow-md">
            <img className="place-self-center" src={WorkForFreelaLogo} alt="" />
            <div className="flex gap-6 place-self-center">
                <Link to="/">Encontre Projetos</Link>
                <Link to="/proposes">Minhas Propostas</Link>
                <Link to="/project/new" className="place-self-center">Criar Projeto</Link>
            </div>
            {
                currentUser ?
                    <div className="flex gap-2 place-self-center">
                        <Link to="/user/1" className="place-self-center">Meu Perfil</Link>
                        <span onClick={handleSignout} className="cursor-pointer place-self-center">Sair</span>
                    </div>
                    :
                    <div className="flex gap-2 place-self-center">
                        <Link to="/user/signin" className="place-self-center">Entrar</Link>
                        <Link to="/user/signup" className="place-self-center">Cadastre-se</Link>
                    </div>
            }

            {/* <img src="https://avatars.githubusercontent.com/u/60005589?v=4" alt="" className="w-10 h-10 rounded-full place-self-center" /> */}
        </header>
    )
}
