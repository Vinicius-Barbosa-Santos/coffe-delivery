import { CoffeeList, OurCoffeesContainer } from "./styles"
import { TitleText } from "../../../../components/Typografy"
import { CoffeeCard } from "../CoffeeCard"

import { coffees } from '../../../../data/coffees'

export const OurCoffees = () => {
    return (
        <OurCoffeesContainer className="container">
            <TitleText size="l" color="subtitle">
                Nossos Cafés
            </TitleText>

            <CoffeeList>
                {coffees.map((coffee) => (
                    <CoffeeCard key={coffee.id} coffee={coffee}/>
                ))}
            </CoffeeList>
        </OurCoffeesContainer>
    )
}