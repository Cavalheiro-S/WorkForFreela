import { Button } from '@/components/Button'
import { Form } from '@/components/Form/Form'
import { Input } from '@/components/Input'
import { Loading } from '@/components/Loading'
import { useAuth } from '@/hooks/useAuth'
import { CheckCircle } from '@phosphor-icons/react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

interface Inputs {
    email: string
}

export const RecoverPassword = () => {

    const { register, handleSubmit, formState: { errors }, setError } = useForm<Inputs>()
    const [emailSent, setEmailSent] = useState(false)
    const { resetPassword, loading } = useAuth()

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const { error } = await resetPassword(data.email);
        if (!error) {
            setEmailSent(true)
        }
        else
            setError("root", { message: error.message, type: "manual" })
    }

    return loading ? <Loading /> : (
        <Form
            onSubmit={handleSubmit(onSubmit)}
            title='Recuperar senha'
            subtitle='Informe seu email e nós vamos enviar um link para você alterar sua senha'>
            {emailSent &&
                <div className="flex flex-col items-center justify-center gap-2 p-2 bg-green-400 rounded h-fit">
                    <CheckCircle className="w-6 h-6 text-white" />
                    <span className='text-center text-white'>Um email foi enviado para você com as instruções para recuperar sua senha</span>
                </div>
            }
            <label htmlFor='email'>Email
                <Input.Root>
                    <Input.Input placeholder='example@email.com' {...register("email")} name='email' type='email' />
                </Input.Root>
                {errors.email && errors.email.type === 'required' && <Input.Error>Email inválido</Input.Error>}
            </label>
            <Button>Enviar</Button>
        </Form>
    )
}
