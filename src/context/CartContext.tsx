import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { CoffeeTypes } from '../interfaces/CoffeeTypes'
import { produce } from 'immer'
import { toast } from 'react-toastify'

export interface CartItem extends CoffeeTypes {
    quantity: number,
}

interface CartContextType {
    cartItems: CartItem[],
    cartQuantity: number,
    cartItemsTotal: number,
    addCoffeeToCart: (coffee: CartItem) => void,
    changeCartItemQuantity: (cartItemid: number, type: 'increase' | 'decrease') => void,
    removeCartItem: (cartItemId: number) => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
    children: ReactNode
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems"

export const CartContextProvider = ({ children }: CartContextProviderProps) => {

    const [cartItems, setCartItems] = useState<CartItem[]>(() => {
        const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY)

        if (storedCartItems) {
            return JSON.parse(storedCartItems)
        }

        return []
    })

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity;
    }, 0);

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

    const changeCartItemQuantity = (cartItemid: number, type: 'increase' | 'decrease') => {
        const newCart = produce(cartItems, (draft) => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemid)

            if (coffeeExistsInCart >= 0) {
                const item = draft[coffeeExistsInCart]
                draft[coffeeExistsInCart].quantity = type === 'increase' ? item.quantity + 1 : item.quantity - 1
            }
        })

        setCartItems(newCart)
    }

    const removeCartItem = (cartItemId: number) => {
        const newCart = produce(cartItems, draft => {
            const coffeeExistsInCart = cartItems.findIndex(cartItem => cartItem.id === cartItemId)

            if (coffeeExistsInCart >= 0) {
                draft.splice(coffeeExistsInCart, 1)
            }
        })

        setCartItems(newCart)
    }

    useEffect(() => {
        localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems))
    }, [cartItems])

    return (
        <CartContext.Provider value={{
            cartItems,
            cartQuantity,
            addCoffeeToCart,
            changeCartItemQuantity,
            removeCartItem,
            cartItemsTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
    const context = useContext(CartContext)

    return context
}
