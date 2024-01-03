import { ReactNode, createContext, useEffect, useState } from 'react'
import { SnackData } from '../interfaces/SnackData'
import { getBurguers, getDrinks, getIceCream, getPizzas } from '../services/api'

interface SnackContextProps {
  burgers: SnackData[]
  pizzas: SnackData[]
  drinks: SnackData[]
  iceCream: SnackData[]
}

interface SnackProvider {
  children: ReactNode
}

export const SnackContext = createContext({} as SnackContextProps)

export default function SnackProvider({ children }: SnackProvider) {
  const [burgers, setBugers] = useState<SnackData[]>([])
  const [drinks, setDrinks] = useState<SnackData[]>([])
  const [iceCream, setIceCream] = useState<SnackData[]>([])
  const [pizzas, setPizzas] = useState<SnackData[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const burgerRequest = await getBurguers()
        const drinksRequest = await getDrinks()
        const iceCreamRequest = await getIceCream()
        const pizzasRequest = await getPizzas()

        const request = [burgerRequest, drinksRequest, iceCreamRequest, pizzasRequest]

        const [
          { data: burgerResponse },
          { data: pizzaResponse },
          { data: drinkResponse },
          { data: iceCreamResponse },
        ] = await Promise.all(request)

        setBugers(burgerResponse)
        setDrinks(drinkResponse)
        setIceCream(iceCreamResponse)
        setPizzas(pizzaResponse)
      } catch (error) {
        console.error(error)
      }
    })()
  }, [])

  return (
    <SnackContext.Provider value={{ burgers, drinks, iceCream, pizzas }}>
      {children}
    </SnackContext.Provider>
  )
}
