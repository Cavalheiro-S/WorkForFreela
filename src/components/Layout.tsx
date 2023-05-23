import { Header } from "./Header";

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="min-h-screen">
            <Header />
            {children}
            <footer>Footer</footer>
        </div>
    )
}
