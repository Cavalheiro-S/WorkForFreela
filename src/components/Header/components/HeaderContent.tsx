import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../../../hooks/useAuth"
import { ItemMenuContainer } from "./ItemMenuContainer"

export const HeaderContent = () => {
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

    const renderContentIfUserIsLogged = () => {
        if (currentUser) {
            return (
                <ItemMenuContainer>
                    <Link to="/user/1" className="place-self-center">Meu Perfil</Link>
                    <span onClick={handleSignout} className="cursor-pointer place-self-center">Sair</span>
                </ItemMenuContainer>
            )
        }
        else {
            return (
                <ItemMenuContainer>
                    <Link to="/user/signin" className="place-self-center">Entrar</Link>
                    <Link to="/user/signup" className="place-self-center">Cadastre-se</Link>
                </ItemMenuContainer>
            )
        }
    }

    return (
        <>
            <ItemMenuContainer>
                <Link to="/">Encontre Projetos</Link>
                <Link to="/proposes">Minhas Propostas</Link>
                <Link to="/project/new" className="place-self-center">Criar Projeto</Link>
            </ItemMenuContainer>
            {renderContentIfUserIsLogged()}
        </>
    )

}
