export const priceFormatter = (value : number) => {
  return value.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
  })
};