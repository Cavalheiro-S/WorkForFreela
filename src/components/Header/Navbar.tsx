import { List } from '@phosphor-icons/react'
import { useState } from 'react'
import { Logo } from '../Logo'
import { HeaderContent } from './components/HeaderContent'

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <>
            <nav className="flex flex-wrap items-center justify-between p-6">
                <Logo />
                <List onClick={handleToggleMenu} className="self-center block w-6 h-6 place-self-end" />
            </nav>
            <div onClick={handleToggleMenu} className={isMenuOpen ? "absolute bg-white flex flex-col w-screen py-4 shadow-md gap-6 z-10" : "hidden"}>
                {<HeaderContent />}
            </div>
        </>
    )
}
