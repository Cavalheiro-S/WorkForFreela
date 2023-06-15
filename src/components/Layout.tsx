import { Header } from "./Header/Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="flex justify-center w-full min-h-[85vh] px-4 pt-8 md:px-20">
                {children}
            </main>
            <footer className="my-20">
                <div className="flex flex-col items-center justify-center gap-4">
                    <span className="text-gray-500">© 2023 - Todos os direitos reservados</span>
                </div>
            </footer>
        </div>
    )
}
