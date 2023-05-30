
export const Loading = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[90vh]">
            <div className="w-32 h-32 border-b-4 rounded-full animate-spin border-primary"></div>
            <div className="mt-4 text-primary">Carregando...</div>
        </div>
    )
}