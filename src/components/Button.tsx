import { twMerge } from "tailwind-merge"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary",
    asChild?: boolean
}

export const Button = (props: ButtonProps) => {

    const Component = props.asChild ? Slot : "button"

    return (
        <Component
            className={twMerge(
                "flex items-center justify-center gap-2 px-4 py-2 rounded border transition",
                props.color === "secondary"
                    ? "bg-transparent text-primary border-primary hover:bg-primary-light"
                    : "bg-primary text-white hover:bg-primary-hover",
                props.className)}>
            {props.children}
        </Component>
    )
}
