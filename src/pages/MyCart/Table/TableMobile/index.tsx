import React, { useEffect, useState } from 'react'
import { Container } from './styles'
import useCart from '../../../../Hooks/useCart'
import { CurrencyFormat } from '../../../../utils'
import  plusImg  from '../../../../assets/circle-plus.svg'
import  minusImg  from '../../../../assets/circle-minus.svg'
import { FaTrashAlt } from 'react-icons/fa'
import ConfirmOrder from '../../../../components/OrderCloseAction/ConfirmOrder'


const TableMobile = () => {
  const { cart, snackCartIncrement, snackCartDecrement, removeSnackFromCart, confirmOrder, addSnackIntoCart } = useCart()

    const scrollToBottom = () => {
      const endPage = 10000

      window.scrollTo({
        top: endPage,
        behavior: 'smooth'
      })
    }

  return (
    <Container>
      <button type="button" onClick={scrollToBottom}>Finalizar pedido</button>
        {cart.map((item) => (
          <div key={`${item.snack}-${item.id}`} className='order-item'>
            <div>
              <img src={item.image} alt={item.name} />
            </div>
            <div>
              <h4>{item.name}</h4>
              <span>{CurrencyFormat(item.price)}</span>
              <div>
                <div>
                  <button type="button" onClick={() =>snackCartDecrement(item)}>
                    <img src={minusImg} alt="remover quantidade" />
                  </button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type="button" onClick={() =>snackCartIncrement(item)}>
                    <img src={plusImg} alt="adicionar quantidade" />
                  </button>
                </div>
                <button type="button" onClick={() => removeSnackFromCart(item)}>
                  <FaTrashAlt />
                </button>
              </div>
              <h5>
                <span>Subtotal</span> {CurrencyFormat(item.subtotal)}
              </h5>
            </div>
          </div>
        ))}

        <ConfirmOrder />
    </Container>
  )
}

export default TableMobile
