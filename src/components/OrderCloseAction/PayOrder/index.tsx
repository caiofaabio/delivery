import React from 'react'
import useCart from '../../../Hooks/useCart'
import { Container } from '../styled'
import { CurrencyFormat } from '../../../utils'

const PayOrder = () => {
  const { cart, payOrder } = useCart()

  const totalAmount = cart.reduce((produtoAtual, item) => (produtoAtual += item.subtotal), 0)

  return (
    <Container>
      <button type="submit" >Pagar!</button>
      <span>
        Total: <strong>{CurrencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}

export default PayOrder


