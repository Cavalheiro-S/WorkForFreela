import { EnvelopeSimple, Lock, WarningCircle } from '@phosphor-icons/react'
import { Button } from '@/components/Button'
import { StepInputProps } from './Form'
import { Input } from '@/components/Input'


export const Step1 = ({ register, errors, getValues }: StepInputProps) => (
    <>
        {errors.root && <div className="flex items-center gap-2 p-2 text-white bg-red-400 rounded">
            <WarningCircle className="w-6 h-6" />
            {errors.root && errors.root.type === "manual" && errors.root.message}
        </div>}
        <label htmlFor="">
            Nome
            <Input.Root fieldError={errors.name}>
                <Input.Input {...register("name", { required: true, minLength: 4 })} type="text" />
            </Input.Root>
            <Input.Error>
                {errors.name && "O nome deve ter no mínimo 4 caracteres"}
            </Input.Error>
        </label>
        <label htmlFor="">
            Email
            <Input.Root fieldError={errors.email}>
                <EnvelopeSimple className="w-6 h-6 text-gray-500" />
                <Input.Input {...register("email", { required: true })} type="email" placeholder="example@email.com" />
            </Input.Root>
            {errors.email && <Input.Error>Email inválido</Input.Error>}
        </label>
        <label htmlFor="">
            Senha
            <Input.Root fieldError={errors.password}>
                <Lock className="w-6 h-6 text-gray-500" />
                <Input.Password {...register("password", { required: true, minLength: 6 })} />
            </Input.Root>
            {errors.password && <Input.Error>A senha deve ter no mínimo 6 caracteres</Input.Error>}
        </label>
        <label htmlFor="">
            Confirme a senha
            <Input.Root fieldError={errors.confirmPassword}>
                <Lock className="w-6 h-6 text-gray-500" />
                <Input.Password {...register("confirmPassword", { validate: value => getValues("password") === value })} />
            </Input.Root>
            {errors.confirmPassword && <Input.Error>As senhas não coincidem</Input.Error>}
        </label>
        <Button className="w-full">Avançar</Button>
    </>

)
