import * as C from './styles'

import { RegularText } from '../../../../components/Typografy'
import { QuantityInput } from '../../../Home/components/QuantityInput'
import { Trash } from 'phosphor-react'
import { CartItem, useCart } from '../../../../context/CartContext'
import { priceFormatter } from '../../../../utils/priceFormater'

interface CoffeeCartCardProps {
    coffee: CartItem
}

export const CoffeeCartCard = ({ coffee }: CoffeeCartCardProps) => {

    const { changeCartItemQuantity, removeCartItem } = useCart()

    const handleIncrease = () => {
        changeCartItemQuantity(coffee.id, 'increase')
    }

    const handleDecrease = () => {
        changeCartItemQuantity(coffee.id, 'decrease')
    }

    const handleRemove = () => {
        removeCartItem(coffee.id)
    }

    const coffeeTotal = coffee.price * coffee.quantity
    const formattedPrice = priceFormatter(coffeeTotal)

    return (
        <C.CoffeeCartCardContainer>
            <div>
                <img src={coffee.photo} alt="" />
                <div>
                    <RegularText color='subtitle'>{coffee.name}</RegularText>
                    <C.ActionsContainer>
                        <QuantityInput
                            size="small"
                            onIncrease={handleIncrease}
                            onDecrease={handleDecrease}
                            quantity={coffee.quantity}
                        />
                        <C.RemoveButton onClick={handleRemove}>
                            <Trash size={16} />
                            REMOVER
                        </C.RemoveButton>
                    </C.ActionsContainer>
                </div>
            </div>

            <p>R$ {formattedPrice}</p>
        </C.CoffeeCartCardContainer>
    )
}
