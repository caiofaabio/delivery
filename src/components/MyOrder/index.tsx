
import useCart from "../../Hooks/useCart";
import { Container } from "./style";
import { ReactComponent as CartIcon} from "../../assets/shopping-cart.svg";

export default function MyOrder() {
  const { cart } = useCart()
  return (
    <Container to={'cart'}>
      <span>Meu pedido</span>
      <CartIcon />

      {cart.length !== 0 && <span>{`${cart.length}`.padStart(2, '0')}</span>}
    </Container>
  )

}
