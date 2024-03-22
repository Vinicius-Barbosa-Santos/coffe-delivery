import { ReactNode, createContext, useState } from "react";
import { CoffeeCardProps } from '../pages/Home/components/CoffeeCard'

export interface CartItem extends CoffeeCardProps {
    quantity: number,
    subtotal: number
}

interface CartContextType {
    cartItems: CartItem[]
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    return (
        <CartContext.Provider value={{ cartItems }}>
            {children}
        </CartContext.Provider>
    )
}