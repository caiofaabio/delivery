import Head from "../../../components/Head";
import SnackTitle from "../../../components/SnackTitle";
import Snacks from "../Snacks";

export default function Pizzas (){
  const data = [
    {
      id: 1,
      snack: 'drinks',
      name: 'Coca-Cola',
      description: 'A tradicional Coca-Cola bem gelada.',
      price: 12.5,
      image: 'https://static.paodeacucar.com/img/uploads/1/120/24982120.png'
    },
    {
      id: 2,
      snack: 'drinks',
      name: 'Fanta',
      description: 'O refrigerante de laranja mais amado do brasil.',
      price: 11.5,
      image: 'https://static.paodeacucar.com/img/uploads/1/296/24981296.png'
    },
    {
      id: 2,
      snack: 'drinks',
      name: 'Suco de Laranja',
      description: 'Um delicioso suco de laranja 100% natural.',
      price: 8.5,
      image: 'https://riomarkennedyonline.com.br/riomarkennedyonline/2021/11/suco_de_laranja_companhia_do_churrasco_500_ml_riomar_kennedy.jpg'
    }
  ]

  return (
    <>
      <Head title='Pizzas' description='Sua página de Hamburguers' />
      <SnackTitle>Pizzas</SnackTitle>

      <Snacks snacks={data} />
    </>
  )
}
