import { useEffect, useState } from "react";
import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../Snacks";
import { getPizzas } from "../../../services/api";
import { SnackData } from "../../../interfaces/SnackData";

export default function Pizzas (){
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    (async () => {
      const pizzasRequest = getPizzas()

      setPizzas((await pizzasRequest).data)
    })()
  }, [])



  return (
    <>
      <Head title='Pizzas' description='Sua página de Hamburguers' />
      <SnackTitle>Pizzas</SnackTitle>

      <Snacks snacks={pizzas} />
    </>
  )
}
