export function formatCurrency(valeu: number) {

    return new Intl.NumberFormat('pt-br',
        {
            style: "currency",
            currency: "BRL"
        })
        .format(valeu)
}