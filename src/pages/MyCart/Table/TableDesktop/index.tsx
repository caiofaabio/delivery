import React from 'react'
import { Container } from './styles'
import useCart from '../../../../Hooks/useCart'
import { CurrencyFormat } from '../../../../utils'
import { FaTrashAlt } from 'react-icons/fa'

import  plusImg  from '../../../../assets/circle-plus.svg'
import  minusImg  from '../../../../assets/circle-minus.svg'
import ConfirmOrder from '../../../../components/OrderCloseAction/ConfirmOrder'

const TableDesktop = () => {
  const { cart, removeSnackFromCart, snackCartIncrement, snackCartDecrement } = useCart()
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Lanche</th>
            <th>Qtd</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={`${item.snack}-${item.id}`}>
              <td>
                <img src={item.image} alt={item.name} />
              </td>
              <td>
                <h4>{item.name}</h4>
                <span>{CurrencyFormat(item.price)}</span>
              </td>
              <td>
                <div>
                  <button type='button' onClick={() => snackCartDecrement(item)}><img src={minusImg} alt={minusImg} /></button>
                  <span>{`${item.quantity}`.padStart(2, '0')}</span>
                  <button type='button' onClick={() => snackCartIncrement(item)}><img src={plusImg} alt={plusImg} /></button>
                </div>
              </td>
              <td>
                <h5>{CurrencyFormat(item.subtotal)}</h5>
              </td>
              <td>
                <button type='button' onClick={

                  () => removeSnackFromCart(item)
                }>
                  <FaTrashAlt />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <ConfirmOrder />
    </Container>
  )
}

export default TableDesktop
