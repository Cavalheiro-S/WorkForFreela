import { useWindowDimensions } from "../../hooks/useWindowDimensions"
import { Logo } from "../Logo"
import { Navbar } from "./Navbar"
import { HeaderContent } from "./components/HeaderContent"

export const Header = () => {
    const { width } = useWindowDimensions()

    return (
        width > 768
            ? <header className="grid items-center justify-center w-screen h-24 grid-cols-2 px-4 text-sm text-gray-800 shadow-md md:px-20 md:grid-cols-3">
                <Logo className="self-center place-self-start" />
                <HeaderContent />
            </header>
            : <Navbar />
    )

}
