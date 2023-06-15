import { Input } from "@/components/Input"
import { useApiService } from "@/hooks/useApiService"
import { ProjectCard } from "@/pages/Project/components/ProjectCard"
import { Project, ProjectCategory } from "@/services/interfaces/Project"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useEffect, useState } from "react"

export const Home = () => {

  const { getAllData } = useApiService();
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {

    const getResource = async () => {
      const data = await getAllData<Project>("project");
      if (!data || !data.data) return
      setProjects(data.data);
    }

    getResource();

  }, [])

  const renderProjects = () => (

    projects.map((project) => (
      <ProjectCard
        key={project.id}
        id={project.id ?? ""}
        name={project.name}
        description={project.description}
        value={project.value}
        tag={ProjectCategory[project.category]}
      />
    ))
  )

  return (
    <div className="flex flex-col space-y-4 text-gray-800 md:p-0">
      <Input.Root className="h-14">
        <Input.Input placeholder="Pesquise um projeto" />
        <MagnifyingGlass className="w-6 h-6 text-primary" />
      </Input.Root>

      {/* Container Project Cards */}
      <div className="place-self-start">
        <span>Projetos</span>
        <h3 className="text-3xl font-semibold">Principais</h3>
        <div className="flex flex-col gap-6 mt-10">
          {renderProjects()}
        </div>
      </div>
    </div>
  )
}
