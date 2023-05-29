interface ItemMenuContainerProps {
    children: React.ReactNode;
}

export const ItemMenuContainer = ({ children }: ItemMenuContainerProps) => {
    return (
        <div className="flex flex-col w-full gap-6 text-center md:flex-row place-self-center md:w-fit">
            {children}
        </div>
    )
}


