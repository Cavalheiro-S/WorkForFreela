import { Link } from "react-router-dom"
import WorkForFreelaLogo from "../assets/workforfreela_logo.svg"

export const Header = () => {
    return (
        <header className="grid items-center justify-center h-24 grid-cols-3 px-20 text-sm text-gray-800 shadow-md">
            <img className="place-self-center" src={WorkForFreelaLogo} alt="" />
            <div className="flex gap-6 place-self-center">
                <Link to="/">Encontre Projetos</Link>
                <Link to="/proposes">Minhas Propostas</Link>
                <Link to="/project/new" className="place-self-center">Criar Projeto</Link>
            </div>
            <div className="flex gap-2 place-self-center">
                <Link to="/user/signin" className="place-self-center">Entrar</Link>
                <Link to="/user/signup" className="place-self-center">Cadastre-se</Link>
            </div>
            {/* <img src="https://avatars.githubusercontent.com/u/60005589?v=4" alt="" className="w-10 h-10 rounded-full place-self-center" /> */}
        </header>
    )
}
