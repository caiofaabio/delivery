import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes'
import 'react-toastify/dist/ReactToastify.css';

import { Theme } from './styles/Theme'
import { GlobalStyle } from './styles/global'
import { Normalize } from 'styled-normalize'
import SnackProvider from './context/SnackContext';
import { CartProvider } from './context/CartContext';
import { ToastContainer } from 'react-toastify';


export default function App() {

  return (
    <BrowserRouter>
      <Theme>
        <SnackProvider>
        <CartProvider>
          <AppRoutes />
          <GlobalStyle />
          <ToastContainer autoClose={2000} theme="light"/>
          <Normalize />
        </CartProvider>
        </SnackProvider>
      </Theme>
    </BrowserRouter>
  )
}
