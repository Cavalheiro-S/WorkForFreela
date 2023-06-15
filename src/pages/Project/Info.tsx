import { Badget } from "@/components/Badget"
import { useApiService } from "@/hooks/useApiService"
import { Project, ProjectCategory } from "@/services/interfaces/Project"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { ProposeModal } from "./components/ProposeModal/ProposeModal"

export const ProjectInfo = () => {
    const params = useParams<{ id: string }>()
    const { getDataById } = useApiService();
    const [project, setProject] = useState<Project>()
    const [open, setOpen] = useState(false)

    useEffect(() => {
        const getResource = async () => {
            if (!params.id) return
            const data = await getDataById<Project>("project", params.id);
            if (!data || !data.data) return
            setProject(data.data);
        }

        getResource();

    }, [params.id])


    return (
        <div className="flex flex-col w-full gap-6 md:gap-20 md:grid md:grid-cols-2">
            {/* Coluna 1 */}
            <div className="flex flex-col w-full gap-2">
                <span className="text-xl">{project?.name}</span>
                <h3 className="text-3xl">Descrição</h3>
                <p className="text-gray-500">
                    {project?.description}
                </p>
                {/* Badgets */}
                <div className="flex gap-6">
                    <Badget>{ProjectCategory[project?.category ?? 1]}</Badget>
                </div>
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col gap-6 max-w-[400px] w-full">
                <div className="flex flex-col">
                    <span className="text-gray-400">Valor:</span>
                    <span>{project?.value}</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-400">Prazo:</span>
                    <span>{new Date(project?.deadline ?? new Date()).toLocaleDateString()}</span>
                </div>

                {/* Formulario de propose */}
                <ProposeModal projectId={params.id ?? ""} open={open} onOpenChange={setOpen}
                />
            </div>
        </div>
    )
}
