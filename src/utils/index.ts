export const formatInputMoney = (value: string): number => {
    const valueAsString = value.replace("R$", "")
        .replace(".", "")
        .replace(",", ".")
    return Number(valueAsString)
}
