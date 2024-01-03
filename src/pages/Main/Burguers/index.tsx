import { useEffect, useState } from 'react'
import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'
import Snacks from '../Snacks'
import { getBurguers } from '../../../services/api'
import { SnackData } from '../../../interfaces/SnackData'

export default function Burguers (){
  const [burgers, setBugers] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const burgerRequest = await getBurguers()

      setBugers(burgerRequest.data)
    }) ()
  }, [])


  return (
    <>
      <Head title='Hambúrguers' description='Sua página de Hamburguers' />
      <SnackTitle>Hambúrguers</SnackTitle>

      <Snacks snacks={burgers} />
    </>
  )
}
