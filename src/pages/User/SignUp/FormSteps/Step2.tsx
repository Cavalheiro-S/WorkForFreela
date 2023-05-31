import { useEffect, useState } from 'react'
import { Input } from '../../../../components/Input'
import { Select } from '../../../../components/Select'
import { StepInputProps } from '../Signup'
import { Button } from '../../../../components/Button'
import { Controller } from 'react-hook-form'

export const Step2 = ({ register, getValues, control }: StepInputProps) => {

    const [accountType, setAccountType] = useState<"contractor" | "hired">("contractor")

    const options = [
        { value: "javascript", label: "Javascript" },
        { value: "sql", label: "SQL" },
        { value: "csharp", label: "C#" },
    ]

    useEffect(() => {
        setAccountType(getValues("accountType"))
    }, [getValues("accountType")])

    return (
        <div>
            <p>Criar conta para:</p>
            <div className='flex flex-col gap-2'>
                <Input.Root className='gap-2 bg-transparent'>
                    <Input.Input
                        className='flex-grow-0 flex-shrink-0'
                        {...register("accountType")}
                        type="radio"
                        value="contractor"
                        onClick={() => setAccountType("contractor")}
                        name="accountType"
                        id="accountContractor" />
                    <label className='text-gray-500' htmlFor="accountContractor">Publicar Projetos</label>
                </Input.Root>
                <Input.Root className='gap-2 bg-transparent'>
                    <Input.Input
                        className='flex-grow-0 flex-shrink-0'
                        {...register("accountType")}
                        type="radio"
                        value="hired"
                        onClick={() => setAccountType("hired")}
                        name="accountType"
                        id="accountHired" />
                    <label className='text-gray-500' htmlFor="accountHired">Enviar Propostas</label>
                </Input.Root>
            </div>

            {accountType === "hired" && (
                <>
                    <label>
                        Descrição do perfil
                        <Input.Root>
                            <Input.TextArea {...register("description", { required: true })} />
                        </Input.Root>
                    </label>
                    <label>
                        Habilidades
                        {control &&
                            <Controller
                                name="skills"
                                defaultValue={[]}
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        {...field}
                                        placeholder='Selecione suas principais habilidades'
                                        isMulti
                                        options={options}
                                    />
                                )}
                            />}

                    </label>
                </>
            )}
            <Button className="w-full mt-2">Criar Conta</Button>
        </div>
    )
}
