import { forwardRef } from "react"
import ReactSelect, { GroupBase, StylesConfig, SelectInstance } from "react-select"

interface SelectProps {
    options: SelectOption[],
    placeholder?: string,
    name?: string,
    isMulti?: boolean
    onBlur?: () => void
    onChange?: (value: any) => void
    value?: any
    ref: any
}

type SelectOption = {
    value: string
    label: string
}
export const Select = forwardRef<SelectInstance<SelectOption, true, GroupBase<SelectOption>>, SelectProps>(({ options, placeholder, name, onBlur, onChange, value }, ref) => {
    const customStyles: StylesConfig<SelectOption> = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "#F3F4F6",
            border: "none",
        })
    };
    return (
        <ReactSelect 
        ref={ref} 
        styles={customStyles} 
        options={options} 
        isMulti 
        placeholder={placeholder}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        value={value}
        />
    )
})
