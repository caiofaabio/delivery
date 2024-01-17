import React from 'react'
import useCart from '../../../Hooks/useCart'
import { Container } from '../styled'
import { CurrencyFormat } from '../../../utils'

const ConfirmOrder = () => {
  const { cart, confirmOrder } = useCart()

  const totalAmount = cart.reduce((produtoAtual, item) => (produtoAtual += item.subtotal), 0)

  return (
    <Container>
      <button type="button" onClick={() => confirmOrder()}>Finalizar Pedido</button>
      <span>
        Total: <strong>{CurrencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}

export default ConfirmOrder


