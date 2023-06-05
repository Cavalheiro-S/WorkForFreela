import { useNavigate } from "react-router-dom"
import { Button } from "@/components/Button"

export const ProposeCard = () => {
    const navigate = useNavigate()
    return (
        <div className="flex flex-col max-w-2xl gap-3 p-6 transition border rounded hover:border-primary">
            <div className="space-y-3" onClick={() => navigate("/project/1")}>
                <h3 className="font-semibold">Titulo Do Projeto</h3>
                <div className="flex gap-10">
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Valor Orçamento:</span>
                        <span className="">R$ 3000</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-sm text-gray-500">Prazo:</span>
                        <span className="">05/06/2023</span>
                    </div>
                </div>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pharetra lectus id urna semper, sit amet bibendum massa efficitur. Suspendisse sagittis mollis odio in semper. Sed sed ante lacinia, ultricies nibh in, dictum turpis. Donec ut varius ex. Fusce varius rhoncus dignissim. Curabitur non viverra ex. In egestas felis a molestie elementum. Nulla ut massa sem.</p>
            </div >
            <Button className="md:place-self-end">Editar Proposta</Button>
        </div >
    )
}
