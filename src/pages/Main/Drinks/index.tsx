
import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../Snacks";
import { useSnack } from "../../../Hooks/useSnack";

export default function Drinks (){
  const {drinks} = useSnack()

  return (
    <>
      <Head title='Bebidas' description='Sua página de Bebidas' />
      <SnackTitle>Bebidas</SnackTitle>

      <Snacks snacks={drinks} />
    </>
  )
}
