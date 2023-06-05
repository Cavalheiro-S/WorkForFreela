import { MagnifyingGlass } from "@phosphor-icons/react"
import { Input } from "@/components/Input"
import { ProjectCard } from "@/pages/Project/components/ProjectCard"

export const Home = () => {
  return (
    <div className="flex flex-col space-y-4 text-gray-800 md:p-0">
      <Input.Root className="h-14">
        <Input.Input placeholder="Pesquise um projeto" />
        <MagnifyingGlass className="w-6 h-6 text-gray-500" />
      </Input.Root>

      {/* Container Project Cards */}
      <div className="place-self-start">
        <span>Projetos</span>
        <h3 className="text-3xl font-bold">Principais</h3>
      </div>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  )
}
