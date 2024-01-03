import { useContext } from "react";

import { CartContext } from "../context/CartContext";

export default function useCart(){
  const contextData = useContext(CartContext)

  return contextData
}
