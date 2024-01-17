import { Button, Container } from "./style";

interface EmptyCartProps {
  title: string;
}

import man from '../../assets/man-and-burger.svg'

export default function EmptyCart({title}: EmptyCartProps){
  return (
    <Container>
      <h2>{title}</h2>
      <Button to='/'>Checar o cardápio</Button>
      <img src={man} alt="Homem com hambúrguer" />
    </Container>
  )
}
