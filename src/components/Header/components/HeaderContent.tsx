import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { useAuth } from "../../../hooks/useAuth"
import { ItemMenuContainer } from "./ItemMenuContainer"

export const HeaderContent = () => {
    const { isAutenticated, signout } = useAuth()
    const linkHeaderStyle = "place-self-center hover:underline hover:decoration-primary hover:decoration-2 hover:underline-offset-4 transition cursor-default";

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
        if (isAutenticated) {
            return (
                <ItemMenuContainer>
                    <Link to="/user/1" className={linkHeaderStyle}>Meu Perfil</Link>
                    <span onClick={handleSignout} className={linkHeaderStyle + " cursor-pointer"}>Sair</span>
                </ItemMenuContainer>
            )
        }
        else {
            return (
                <ItemMenuContainer>
                    <Link to="/user/signin" className={linkHeaderStyle}>Entrar</Link>
                    <Link to="/user/signup" className={linkHeaderStyle}>Cadastre-se</Link>
                </ItemMenuContainer>
            )
        }
    }

    return (
        <>
            <ItemMenuContainer>
                <Link className={linkHeaderStyle} to="/">Encontre Projetos</Link>
                {isAutenticated && (
                    <>
                        <Link className={linkHeaderStyle} to="/project/proposes">Minhas Propostas</Link>
                        <Link className={linkHeaderStyle} to="/project/new">Criar Projeto</Link>
                    </>
                )}
            </ItemMenuContainer>
            {renderContentIfUserIsLogged()}
        </>
    )

}
