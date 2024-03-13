import { AddCartWrapper, CardFooter, CoffeeCardContainer, Description, Name, Tags } from "./styles"

import { RegularText, TitleText } from "../../../../components/Typografy"
import { QuantityInput } from "../QuantityInput"
import { ShoppingCart } from "phosphor-react"

import { priceFormatter } from '../../../../utils/priceFormater'

interface CoffeeCardProps {
    coffee: {
        id: number,
        tags: string[],
        name: string,
        description: string,
        photo: string,
        price: number
    }
}

export const CoffeeCard = ({ coffee }: CoffeeCardProps) => {

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
                    <QuantityInput />
                    <button>
                        <ShoppingCart weight="fill" size={22} />
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeeCardContainer>
    )
}