import { Link } from "react-router-dom"
import WorkForFreelaLogo from "../assets/workforfreela_logo.svg"

export const Header = () => {
    return (
        <header className="grid grid-cols-3 px-20 items-center justify-center h-24 shadow-md text-gray-800">
            <img className="place-self-center" src={WorkForFreelaLogo} alt="" />
            <div className="flex gap-6 text-md place-self-center">
                <Link to="/">Encontre Projetos</Link>
                <Link to="/proposes">Minhas Propostas</Link>
            </div>
            <img src="https://avatars.githubusercontent.com/u/60005589?v=4" alt="" className="place-self-center rounded-full w-10 h-10" />
        </header>
    )
}
