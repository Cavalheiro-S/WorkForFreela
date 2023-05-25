import { twMerge } from "tailwind-merge"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    color?: "primary" | "secondary"
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            className={twMerge(
                "flex items-center justify-center gap-2 px-4 py-2 rounded border transition",
                props.color === "secondary"
                    ? "bg-transparent text-primary border-primary hover:bg-primary-light"
                    : "bg-primary text-white hover:bg-primary-hover",
                props.className)}>
            {props.children}
        </button>
    )
}
