import { twMerge } from "tailwind-merge"

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
    className?: string
    title: string
    subtitle: string
    children: React.ReactNode
}

export const Form = ({ className, title, subtitle, children, ...props }: FormProps) => {
    return (
        <form {...props} className={twMerge("md:min-w-[400px] w-full md:w-fit flex flex-col gap-6", className)}>
            <div>
                <h3 className="text-3xl font-bold font-title">{title}</h3>
                <span>{subtitle}</span>
            </div>
            {children}
        </form>
    )
}
