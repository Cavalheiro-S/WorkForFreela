import ReactSelect, { StylesConfig } from "react-select"

interface SelectProps {
    options: SelectOption[],
    placeholder?: string
}

type SelectOption = {
    value: string
    label: string
}
export const Select = ({ options, placeholder }: SelectProps) => {
    const customStyles: StylesConfig<SelectOption> = {
        control: (provided) => ({
            ...provided,
            backgroundColor: "#F3F4F6",
            border: "none",
        })
    };
    return (
        <ReactSelect styles={customStyles} options={options} isMulti placeholder={placeholder}/>
    )
}
