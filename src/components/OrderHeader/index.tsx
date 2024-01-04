import { Link } from 'react-router-dom'
import LogoImg from '../../assets/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'
import { Container } from './style'
import useCart from '../../Hooks/useCart'

export default function OrderHeader(){
  const { cart } = useCart()

  return(
    <Container>
      <Link to={'/'}>
        <img src={LogoImg} alt={'ir para home / logo'} />
      </Link>
      <div>
        <div>
          <h3>Meus Pedidos</h3>
          <span>
            <strong>
              {`${cart.length}`.padStart(2,'0')}
            </strong>  lanches(s)
          </span>
        </div>
        <CartIcon />
      </div>
    </Container>
  )
}
