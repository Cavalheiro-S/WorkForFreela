import { Button } from '@/components/Button';
import { XCircle } from '@phosphor-icons/react';
import * as Dialog from '@radix-ui/react-dialog';
import { twMerge } from 'tailwind-merge';
import { ProposeModalForm } from './Form';

interface ProposeModalProps {
    open: boolean
    onOpenChange: React.Dispatch<React.SetStateAction<boolean>>
    triggerClassName?: string
    projectId: string
}

export const ProposeModal = ({ open, onOpenChange, triggerClassName, projectId }: ProposeModalProps) => {

    return (
        <Dialog.Root open={open} onOpenChange={onOpenChange}>
            <Dialog.Trigger asChild>
                <Button className={twMerge("md:place-self-end", triggerClassName)}>
                    Enviar proposta
                </Button>
            </Dialog.Trigger>
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-50" />
            <Dialog.Content className="fixed p-4 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded shadow-lg top-1/2 left-1/2">
                <Dialog.Title className="font-semibold font-title">Faça uma proposta</Dialog.Title>
                <ProposeModalForm projectId={projectId}/>
                <Dialog.Close className="absolute top-0 right-0 p-2 hover:text-red-400">
                    <XCircle className="w-6 h-6" />
                </Dialog.Close>
            </Dialog.Content>
        </Dialog.Root>
    )
}
