import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"

import { RegularText, TitleText } from "../../../../components/Typografy"
import { QuantityInput } from "../QuantityInput"
import { ShoppingCart } from "phosphor-react"

import { priceFormatter } from '../../../../utils/priceFormater'

import { CoffeeTypes } from '../../../../interfaces/CoffeeTypes'
import { useCart } from "../../../../context/CartContext"
import { useState } from "react"

export interface CoffeeCardProps {
    coffee: CoffeeTypes
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {

    const [quantity, setQuantity] = useState(1)

    const { addCoffeeToCart } = useCart()

    const handleIncrease = () => {
        setQuantity(state => state + 1)
    }

    const handleDecrease = () => {
        setQuantity(state => state - 1)
    }

    const handleAddToCart = () => {
        const coffeeToAdd = {
            ...coffee,
            quantity
        }

        addCoffeeToCart(coffeeToAdd)
    }

    const formattedPrice = priceFormatter(coffee.price)

    return (
        <CoffeeCardContainer>
            <img src={coffee.photo} alt="" />

            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id} ${tag}`}>{tag}</span>
                ))}
            </Tags>

            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as={'strong'}>{formattedPrice}</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}