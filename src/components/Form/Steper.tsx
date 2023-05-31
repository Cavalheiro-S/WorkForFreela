import { useContext } from 'react'
import { FormContext } from '../../contexts/FormContext'
import { StepProps } from './Form'

interface SteperProps {
    steps: StepProps[]
}

export const Steper = ({ steps }: SteperProps) => {

    const { currentStep, setCurrentStep } = useContext(FormContext)    

    const renderSteps = () => steps.map((step, index) => (
        <>
            <div
                onClick={() => setCurrentStep(step.title)}
                className={`bg-white h-6 w-6 border-4 rounded-full ${currentStep === step.title && "border-primary h-6 w-6"}`}>
                <div className="relative text-sm text-center text-gray-500 top-6">{step.title}</div>
            </div>
            {index !== steps.length - 1 && <div className="h-0.5 w-40 bg-gray-300" />}
        </>
    )
    )

    return (
        <div className='flex items-center justify-center h-10'>
            {renderSteps()}
        </div>
    )
}

