import { Eye, EyeSlash } from "@phosphor-icons/react";
import { forwardRef, useState } from "react";
import { InputAttributes, NumericFormat, NumericFormatProps } from "react-number-format";
import { twMerge } from "tailwind-merge";

interface InputRootProps {
    children: React.ReactNode;
    className?: string;
}

interface InputErrorProps {
    children: React.ReactNode;
}

const InputRoot = ({ children, className }: InputRootProps) => {
    return (
        <div className={twMerge("flex items-center px-2 min-h-10 bg-gray-100 rounded border-transparent border-2 focus-within:border-primary", className)}>
            {children}
        </div>
    )
}

const InputInput = forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
    return (
        <input ref={ref} {...props} className={twMerge("flex-1 px-4 py-2 bg-transparent rounded outline-none", props.className)} />
    )
})

const InputTextArea = forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>((props, ref) => {
    return (
        <textarea ref={ref} {...props} className={twMerge("flex-1 px-4 py-2 bg-transparent rounded outline-none", props.className)} />
    )
})

const InputMoney = forwardRef<HTMLInputElement, InputAttributes>((props, ref) => {

    return (
        <NumericFormat
            thousandSeparator="."
            decimalSeparator=","
            prefix="R$ "
            decimalScale={2}
            allowNegative={false}
            fixedDecimalScale={true}
            getInputRef={ref}
            customInput={InputInput}
            className={twMerge("flex-1 px-4 py-2 bg-transparent rounded outline-none", props.className)}
            {...props as NumericFormatProps}
        />
    )
})

const InputError = ({ children }: InputErrorProps) => {
    return (
        <span className="text-sm text-red-700">
            {children}
        </span>
    )
}

const InputPassword = ({ ...props }: React.HTMLAttributes<HTMLInputElement>) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <>
            <Input.Input type={isPasswordVisible ? "text" : "password"} placeholder="********" {...props} />
            <div onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
                {isPasswordVisible
                    ? <Eye className="w-6 h-6 text-gray-500" />
                    : <EyeSlash className="w-6 h-6 text-gray-500" />}
            </div>
        </>
    )
}

export const Input = {
    Root: InputRoot,
    Input: InputInput,
    TextArea: InputTextArea,
    Money: InputMoney,
    Error: InputError,
    Password: InputPassword
}
