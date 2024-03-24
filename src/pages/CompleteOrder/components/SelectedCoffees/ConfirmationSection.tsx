import { Button } from '../../../../components/Button'
import { RegularText } from '../../../../components/Typografy'
import { useCart } from '../../../../context/CartContext'
import { priceFormatter } from '../../../../utils/priceFormater';
import * as C from './styles'

const DELIVERY_PRICE = 3.5;

export const ConfirmationSection = () => {

    const { cartItemsTotal, cartQuantity } = useCart()
    const cartTotal = DELIVERY_PRICE + cartItemsTotal

    const formattedItemsTotal = priceFormatter(cartItemsTotal)
    const formattedCartTotal = priceFormatter(cartTotal)
    const formattedDeliveryPrice = priceFormatter(DELIVERY_PRICE)

    return (
        <C.ConfirmationSectionContainer>
            <div>
                <RegularText size='s'>Total de items</RegularText>
                <RegularText>R$ {formattedItemsTotal}</RegularText>
            </div>

            <div>
                <RegularText size='s'>Entrega</RegularText>
                <RegularText>R$ {formattedDeliveryPrice}</RegularText>
            </div>

            <div>
                <RegularText weight={700} color='subtitle' size='l'>Total</RegularText>
                <RegularText weight={700} color='subtitle' size='l'>R$ {formattedCartTotal}</RegularText>
            </div>

            <Button text={'Confirmar Pedido'} disabled={cartQuantity <= 0} type='submit'></Button>
        </C.ConfirmationSectionContainer>
    )
}