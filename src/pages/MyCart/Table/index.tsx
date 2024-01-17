import React, { useEffect, useState } from 'react'
import useCart from '../../../Hooks/useCart'
import TableDesktop from './TableDesktop'
import TableMobile from './TableMobile'
import EmptyCart from '../../../components/EmptyCart'

const Table = () => {
  const { cart } = useCart()
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)


  useEffect(() => {
    function updateTableComponente(){
      const currentWidth = document.documentElement.clientWidth

      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponente)

    return () => {
      window.removeEventListener('resize', updateTableComponente)
    }
  }, [windowWidth])


  if(cart.length === 0) {
    return <EmptyCart title='Ops, Parece que você não tem pedidos, peça já.' />
  }


  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}

export default Table
