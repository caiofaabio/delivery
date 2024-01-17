
import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../Snacks";
import { useSnack } from "../../../Hooks/useSnack";


export default function Pizzas (){
  const { pizzas } = useSnack()



  return (
    <>
      <Head title='Pizzas' description='Sua página de Hamburguers' />
      <SnackTitle>Pizzas</SnackTitle>

      <Snacks snacks={pizzas} />
    </>
  )
}
