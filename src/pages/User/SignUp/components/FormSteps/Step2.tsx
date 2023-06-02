import { useEffect, useState } from 'react'

import { Controller } from 'react-hook-form'
import { Button } from '@/components/Button'
import { Input } from '@/components/Input'
import { Select } from '@/components/Select'
import { StepInputProps } from './Form'

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
        <div className='flex flex-col gap-2'>
            <p>Criar conta para:</p>
            <div className='flex flex-col gap-2'>
                <label className='flex flex-row-reverse items-center justify-end gap-2 text-gray-500' htmlFor="accountContractor">Publicar Projetos
                    <Input.Radio
                        {...register("accountType")}
                        type="radio"
                        value="contractor"
                        onClick={() => setAccountType("contractor")}
                        name="accountType"
                        id="accountContractor" />
                </label>

                <label className='flex flex-row-reverse items-center justify-end gap-2 text-gray-500' htmlFor="accountHired">Enviar Propostas
                    <Input.Radio
                        {...register("accountType")}
                        type="radio"
                        value="hired"
                        onClick={() => setAccountType("hired")}
                        name="accountType"
                        id="accountHired" />
                </label>
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
