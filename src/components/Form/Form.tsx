import { useContext, useEffect } from "react"
import { twMerge } from "tailwind-merge"
import { FormContext } from "../../contexts/FormContext"
import { Steper } from "./Steper"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className?: string
    title: string
    subtitle: string
    children?: React.ReactNode
    steps?: StepProps[]
}

export interface StepProps {
    title: string
    children: React.ReactNode
}

export const Form = ({ className, title, subtitle, children, steps, ...props }: FormProps) => {

    const { currentStep, setCurrentStep } = useContext(FormContext)

    useEffect(() => steps && setCurrentStep(steps[0].title), [])

    return (
        <>
            <form {...props} className={twMerge("md:w-[400px] w-full flex flex-col gap-6", className)}>
                {steps && <Steper steps={steps} />}
                <div>
                    <h3 className="text-3xl font-bold font-title">{title}</h3>
                    <span>{subtitle}</span>
                </div>
                {steps
                    ? steps.find(step => step.title === currentStep)?.children
                    : children
                }
            </form>
        </>
    )
}
