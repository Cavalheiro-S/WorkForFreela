import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import { useAuth } from '@/hooks/useAuth';
import { XCircle } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { useNavigate } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface ProposeModalProps {
    open: boolean
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
    triggerClass?: string
}

export const ProposeModal = ({ open, onOpenChange, triggerClass }: ProposeModalProps) => {
    const { isAutenticated } = useAuth()
    const navigate = useNavigate();
    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Trigger onClick={() => isAutenticated ? null : navigate("/user/signin")}>
                <Button className={twMerge("md:place-self-end", triggerClass)}>Enviar proposta</Button>
            </Dialog.Trigger>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed p-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg top-1/2 left-1/2">
                <Dialog.Title className="font-semibold font-title">Faça uma proposta</Dialog.Title>
                <form className="flex flex-col gap-4 w-[400px] pt-4 text-sm">
                    <label className="flex flex-col gap-2">
                        Descrição
                        <Input.Root>
                            <Input.TextArea
                                className="h-24"
                                placeholder="Escreva uma proposta contendo todos os detalhes que podem interessar o contratante" />
                        </Input.Root>
                        <span className="self-end text-sm">Máx de 200 caracteres</span>
                    </label>
                    <label className="flex flex-col gap-2">
                        Valor
                        <Input.Root>
                            <Input.Money placeholder="R$ 500.00" />
                        </Input.Root>
                    </label>
                    <label className="flex flex-col gap-2">
                        Data de entrega
                        <Input.Root>
                            <Input.Input type='date' placeholder="30/03/2023" />
                        </Input.Root>
                    </label>
                    <Button className="self-end">Enviar Proposta</Button>
                </form>
                <Dialog.Close className="absolute top-0 right-0 p-2 hover:text-red-400">
                    <XCircle className="w-6 h-6" />
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Root>
    )
}
