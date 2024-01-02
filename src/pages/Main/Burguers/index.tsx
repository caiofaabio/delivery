import Head from '../../../components/Head'
import SnackTitle from '../../../components/SnackTitle'

export default function Burguers (){
  const data = [
    {
      id: 1,
      snack: 'burguer',
      name: 'Mega',
      description: 'O artesanal tamanho família recheado com três carnes suculentas, queijo e bacon.',
      price: 25.5,
      image: 'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/5BvH5nLn4cTnYNqbjMXCKAQlaGgrBNCSpQBAPi3N.png'
    },
    {
      id: 2,
      snack: 'burguer',
      name: 'Extra bacon',
      description: 'O artesanal recheado de bacon crocante, queijo e carne.',
      price: 23.5,
      image: 'https://instadelivery-public.nyc3.cdn.digitaloceanspaces.com/itens/5BvH5nLn4cTnYNqbjMXCKAQlaGgrBNCSpQBAPi3N.png'
    }
  ]

  console.log(data)
  return (
    <>
      <Head title='Hambúrguers' description='Sua página de Hamburguers' />
      <SnackTitle>Hambúrguers</SnackTitle>
    </>
  )
}
