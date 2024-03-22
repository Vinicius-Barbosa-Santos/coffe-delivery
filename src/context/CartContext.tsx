import { ReactNode, createContext, useContext, useState } from "react";
import { CoffeeTypes } from '../interfaces/CoffeeTypes'
import { produce } from 'immer'
import { toast } from 'react-toastify'

export interface CartItem extends CoffeeTypes {
    quantity: number,
}

interface CartContextType {
    cartItems: CartItem[],
    addCoffeeToCart: (coffee: CartItem) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const addCoffeeToCart = (coffee: CartItem) => {
        const coffeeAlreadyExistsInCart = cartItems.findIndex(cartItem => cartItem.id === coffee.id)

        const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistsInCart < 0) {
                draft.push(coffee)
                toast.success(`${coffee.name} Adicionado ao carrinho!`)
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
                toast.success(`Outro(a) ${coffee.name} Adicionado ao carrinho!`)
            }
        })

        setCartItems(newCart)
    }

    return (
        <CartContext.Provider value={{ cartItems, addCoffeeToCart }}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext)

    return context
}