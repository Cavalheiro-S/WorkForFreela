import { FormProvider } from '@/contexts/FormContext'
import { FormSignUp } from './components/FormSteps/Form'

export const Signup = () => {
    return (
        <FormProvider>
            <FormSignUp />
        </FormProvider>
    )
}
