import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"

import coffeeImage from '../../../../assets/image-coffee.svg'
import { RegularText, TitleText } from "../../../../components/Typografy"
import { QuantityInput } from "../QuantityInput"
import { ShoppingCart } from "phosphor-react"

export const CoffeeCard = () => {
    return (
        <CoffeeCardContainer>
            <img src={coffeeImage} alt="" />

            <Tags>
                <span>Tradicional</span>
                <span>Com leite</span>
            </Tags>

            <Name>Expresso Tradicional</Name>
            <Description>O tradicional café feito com água quente e grãos moídos</Description>

            <CardFooter>
                <div>
                    <RegularText size="s">R$</RegularText>
                    <TitleText size="m" color="text" as={'strong'}>9,98</TitleText>
                </div>

                <AddCartWrapper>
                    <QuantityInput />
                    <button>
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}