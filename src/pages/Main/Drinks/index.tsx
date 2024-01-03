import { useEffect, useState } from "react";
import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../Snacks";
import { getDrinks } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackData";

export default function Drinks (){
  const [drinks, setDrinks] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const drinksRequest = await getDrinks()

      setDrinks(drinksRequest.data)
    })()
  }, [])

  return (
    <>
      <Head title='Bebidas' description='Sua página de Hamburguers' />
      <SnackTitle>Bebidas</SnackTitle>

      <Snacks snacks={drinks} />
    </>
  )
}
