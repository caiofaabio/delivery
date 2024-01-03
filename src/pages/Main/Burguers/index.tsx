
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../Snacks'
import { useSnack } from '../../../Hoocks/useSnack';

export default function Burguers (){
  const {burgers} = useSnack()

  return (
    <>
      <Head title='Hambúrguers' description='Sua página de Hamburguers' />
      <SnackTitle>Hambúrguers</SnackTitle>

      <Snacks snacks={burgers} />
    </>
  )
}

