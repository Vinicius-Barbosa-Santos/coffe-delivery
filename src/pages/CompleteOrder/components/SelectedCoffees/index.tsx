import { TitleText } from '../../../../components/Typografy'
import { useCart } from '../../../../context/CartContext'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import * as C from './styles'

export const SelectedCoffees = () => {
    const { cartItems } = useCart()

    return (
        <C.SelectedContainer>
            <TitleText size='xs' color='subtitle'>
                Cafés selecionados
            </TitleText>

            <C.DetailsContainer>
                {cartItems.map((item) => (
                    <CoffeeCartCard key={item.id} coffee={item} />
                ))}

                <ConfirmationSection />
            </C.DetailsContainer>
        </C.SelectedContainer>
    )
}