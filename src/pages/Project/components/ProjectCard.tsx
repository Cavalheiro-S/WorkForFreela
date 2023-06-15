import { useNavigate } from "react-router-dom"
import { Badget } from "@/components/Badget"
import { ProposeModal } from "./ProposeModal/ProposeModal"
import { useState } from "react"
import { useAuth } from "@/hooks/useAuth"

interface ProjectCardProps {
    id: string
    name: string
    description: string
    value: number
    tag: string
}

export const ProjectCard = ({ id, name, description, value, tag }: ProjectCardProps) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const { user } = useAuth()
    const navigate = useNavigate()
    return (
        <div className="flex flex-col gap-3 p-6 transition border rounded w-[700px] hover:border-primary">
            <div className="space-y-3" onClick={() => navigate("/project/" + id)}>
                <h3 className="font-semibold">{name}</h3>
                <div className="flex flex-col">
                    <span className="text-sm text-gray-500">Valor máximo </span>
                    <span>R$ {value}</span>
                </div>
                <p className="h-full text-sm">{description}</p>
                <div className="flex flex-wrap gap-2">
                    <Badget>{tag}</Badget>
                </div>
            </div >
            {user?.type === "hired" && <ProposeModal projectId={id} open={isModalOpen} onOpenChange={setIsModalOpen} />}
        </div >
    )
}
