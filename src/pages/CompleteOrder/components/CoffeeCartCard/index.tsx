import * as C from './styles'

import coffeeImage from '../../../../../public/coffees/americano.png'
import { RegularText } from '../../../../components/Typografy'
import { QuantityInput } from '../../../Home/components/QuantityInput'
import { Trash } from 'phosphor-react'

export const CoffeeCartCard = () => {
    return (
        <C.CoffeeCartCardContainer>
            <div>
                <img src={coffeeImage} alt="" />
                <div>
                    <RegularText color='subtitle'>Expresso Tradicional</RegularText>
                    <C.ActionsContainer>
                        <QuantityInput size="small" />
                        <C.RemoveButton>
                            <Trash size={16} />
                            REMOVER
                        </C.RemoveButton>
                    </C.ActionsContainer>
                </div>
            </div>

            <p>R$ 9,90</p>
        </C.CoffeeCartCardContainer>
    )
}