interface BadgetProps {
    children: React.ReactNode;
}

export const Badget = ({ children }: BadgetProps) => {
    return (
        <div className="px-2 py-1 border-2 rounded text-primary border-primary">
            {children}
        </div>
    )
}
