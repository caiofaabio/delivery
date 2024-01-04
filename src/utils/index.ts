export function CurrencyFormat(currency: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(currency)
}

export function SnackEmoji(name: string) {
  switch (name.toLocaleLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🥤'
    case 'ice-cream':
      return '🍨'
    default:
      return '🧑‍🍳'
  }
}
