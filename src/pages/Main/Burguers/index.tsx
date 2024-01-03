
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../Snacks'
import { useSnack } from '../../../Hooks/useSnack';
import { useContext } from 'react';
import { CartContext } from '../../../context/CartContext';

export default function Burguers (){
  const {burgers} = useSnack()
  const { addSnackIntoCart } = useContext(CartContext)

  return (
    <>
      <Head title='Hambúrguers' description='Sua página de Hamburguers' />
      <SnackTitle>Hambúrguers</SnackTitle>

      <Snacks snacks={burgers} />
    </>
  )
}

