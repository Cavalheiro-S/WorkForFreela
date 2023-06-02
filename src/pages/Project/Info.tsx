import { useParams } from "react-router-dom"
import { Button } from "@/components/Button"
import { Input } from "@/components/Input"
import { Badget } from "@/components/Badget"

export const ProjectInfo = () => {
    const params = useParams<{ id: string }>()
    return (
        <div className="flex flex-col gap-6 md:gap-20 md:grid md:grid-cols-2">
            {/* Coluna 1 */}
            <div className="flex flex-col gap-2">
                <span className="text-xl">Projeto</span>
                <h3 className="text-3xl">Descrição {params.id}</h3>
                <p className="text-gray-500">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra tortor vel maximus viverra. Aliquam pharetra congue est in cursus. Donec suscipit purus ac ipsum congue hendrerit. Quisque quis orci in justo ultricies vehicula ullamcorper in massa. Vestibulum ut elit in orci fringilla laoreet et luctus velit. Cras luctus elementum felis, vel posuere augue laoreet quis. Nunc luctus felis mi, non rutrum odio commodo a. Nam quis egestas justo, sed faucibus sem. Nunc a auctor massa. Proin nec eros ac risus auctor suscipit sit amet et mauris. Aliquam at arcu sagittis, porttitor ligula et, posuere massa. Sed ac nulla arcu. Cras consectetur tortor ipsum, non fermentum ligula ultrices nec. Phasellus nec nisl a purus mollis mattis et quis purus. Donec consectetur varius risus ultricies laoreet.
                </p>
                {/* Badgets */}
                <div className="flex gap-6">
                    <Badget>React</Badget>
                    <Badget>Node</Badget>
                    <Badget>Typescript</Badget>
                </div>
            </div>

            {/* Coluna 2 */}
            <div className="flex flex-col gap-6 max-w-[400px] place-self-center w-full">
                <div className="flex flex-col">
                    <span className="text-gray-400">Valor:</span>
                    <span>R$ 500</span>
                </div>
                <div className="flex flex-col">
                    <span className="text-gray-400">Prazo:</span>
                    <span>01/04/2023</span>
                </div>

                {/* Formulario de proposta */}
                <form className="flex flex-col gap-4">
                    <h4 className="font-semibold font-title">Faça uma proposta</h4>
                    <div className="flex flex-col">
                        <span>Descrição</span>
                        <Input.Root>
                            <Input.TextArea
                                className="h-20"
                                placeholder="Escreva uma proposta contendo todos os detalhes que podem interessar o contratante"/>
                        </Input.Root>
                        <span className="self-end text-sm">Máx de 200 caracteres</span>
                    </div>
                    <div className="flex flex-col">
                        <span>Valor</span>
                        <Input.Root>
                            <Input.Money placeholder="R$ 500.00"/>
                        </Input.Root>
                    </div>
                    <Button className="md:place-self-end">Enviar proposta</Button>
                </form>
            </div>
        </div>
    )
}
