import { useEffect, useState } from "react";
import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../Snacks";
import { getIceCream } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackData";

export default function IceCream() {
 const [iceCream, setIceCream] = useState<SnackData[]>([])

 useEffect(() => {
  (async () => {
    const iceCreamRequest = await getIceCream()

    setIceCream(iceCreamRequest.data)
  })()
 }, [])

  return (
    <>
      <Head title='Sorvetes' description='Sua página de Hamburguers' />
      <SnackTitle>Sorvetes</SnackTitle>

      <Snacks snacks={iceCream} />
    </>
  )
}
