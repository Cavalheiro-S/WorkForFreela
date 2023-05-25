import { Header } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen">
            <Header />
            <main className="flex justify-center h-full px-20 pt-20">
                {children}
            </main>
            <footer className="my-20"></footer>
        </div>
    )
}
