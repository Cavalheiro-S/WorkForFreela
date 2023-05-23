

export const ProjectCard = () => {
    return (
        <div className="flex flex-col max-w-2xl gap-3 p-6 border rounded">
            <h3 className="font-bold">Titulo Do Projeto</h3>
            <span>R$ 3000</span>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra lectus id urna semper, sit amet bibendum massa efficitur. Suspendisse sagittis mollis odio in semper. Sed sed ante lacinia, ultricies nibh in, dictum turpis. Donec ut varius ex. Fusce varius rhoncus dignissim. Curabitur non viverra ex. In egestas felis a molestie elementum. Nulla ut massa sem.</p>
            <button className="px-4 py-2 text-white rounded bg-primary place-self-end">Fazer Proposta</button>
        </div>
    )
}
