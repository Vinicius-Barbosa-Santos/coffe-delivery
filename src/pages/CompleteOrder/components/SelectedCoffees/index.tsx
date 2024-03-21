import { TitleText } from '../../../../components/Typografy'
import { CoffeeCartCard } from '../CoffeeCartCard'
import { ConfirmationSection } from './ConfirmationSection'
import * as C from './styles'

export const SelectedCoffees = () => {
    return(
        <C.SelectedContainer>
            <TitleText size='xs' color='subtitle'>
                Cafés selecionados
            </TitleText>

            <C.DetailsContainer>
                <CoffeeCartCard />
                <CoffeeCartCard />
                <CoffeeCartCard />

                <ConfirmationSection />
            </C.DetailsContainer>
        </C.SelectedContainer>
    )
}