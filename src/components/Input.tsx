import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface InputRootProps {
    children: React.ReactNode;
    className?: string;
}

interface InputInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    ref?: React.Ref<HTMLInputElement>;
}

const InputRoot = ({ children, className }: InputRootProps) => {

    return (
        <div className={twMerge("flex items-center px-2 h-10 bg-gray-100 rounded border-transparent border-2 focus-within:border-primary", className)}>
            {children}
        </div>
    )
}

const InputInput = forwardRef<HTMLInputElement, InputInputProps>((props, ref) => {
    return (
        <input ref={ref} {...props} className="flex-1 px-4 py-2 bg-transparent rounded outline-none" />
    )
})

export const Input = {
    Root: InputRoot,
    Input: InputInput
}
