import { twMerge } from "tailwind-merge"

interface FormProps {
    className?: string
    title: string
    subtitle: string
    children: React.ReactNode
}

export const Form = ({ className, title, subtitle, children }: FormProps) => {
    return (
        <div>
            <form className={twMerge("w-[400px] flex flex-col gap-6", className)}>
                <div>
                    <h3 className="text-3xl font-bold font-title">{title}</h3>
                    <span>{subtitle}</span>
                </div>
                {children}
            </form>

        </div>
    )
}
