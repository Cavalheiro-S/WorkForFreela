import { Ref, forwardRef } from "react"

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
    options: SelectOption[]
}

type SelectOption = {
    value: string | number
    label: string
}
export const Select = forwardRef((props: SelectProps, ref: Ref<HTMLSelectElement>) => {
    return (
        <select ref={ref} className="p-2 px-6 bg-gray-100 border-none rounded outline-none" {...props}>
            {props.options.map((option, index) => (
                <option key={option.value + index.toString()} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
})
