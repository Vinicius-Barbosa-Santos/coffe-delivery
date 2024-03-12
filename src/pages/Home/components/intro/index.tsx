import { IntroContainer, IntroContent, IntroTitle } from "./styles"

import intro from '../../../../assets/intro.png'
import { RegularText } from "../../../../components/Typografy"

export const Intro = () => {
    return (
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>

                        <RegularText size="l" color="subtitle" as={'h3'}>
                            <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                        </RegularText>
                    </section>
                </div>

                <img src={intro} alt="" />
            </IntroContent>
        </IntroContainer>
    )
}