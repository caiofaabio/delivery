
import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../Snacks";
import { useSnack } from "../../../Hoocks/useSnack";

export default function IceCream() {
  const {iceCream} = useSnack()

  return (
    <>
      <Head title='Sorvetes' description='Sua página de Hamburguers' />
      <SnackTitle>Sorvetes</SnackTitle>

      <Snacks snacks={iceCream} />
    </>
  )
}
