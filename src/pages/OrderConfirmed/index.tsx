import confirmedOrderIllustration from '../../assets/Illustration.svg'
import { RegularText, TitleText } from '../../components/Typografy'
import { MapPin, Clock, CurrencyDollar } from 'phosphor-react'
import * as C from './styles'
import { InfoWithIcon } from '../../components/InfoWithIcon'
import { useTheme } from 'styled-components'

export const OrderConfirmedPage = () => {
    const { colors } = useTheme()

    return (
        <C.OrderConfirmedContainer className='container'>
            <div>
                <TitleText size='l'>Uhu! Pedido confirmado</TitleText>
                <RegularText size='l' color='subtitle'>Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>

            <section>
                <C.OrderDetailsContainer>
                    <InfoWithIcon
                        icon={<MapPin weight='fill' />}
                        iconbg={colors['brand-purple']}
                        text={
                            <RegularText>
                                Entrega em <strong>Rua João Daniel Martinelli, 102</strong> <br />
                                Farrapos - Porto Alegre, RS
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<Clock weight='fill' />}
                        iconbg={colors['brand-yellow']}
                        text={
                            <RegularText>
                                Previsão de entrega <br />
                                <strong>20 min - 30 min</strong>
                            </RegularText>
                        }
                    />

                    <InfoWithIcon
                        icon={<CurrencyDollar weight='fill' />}
                        iconbg={colors['brand-yellow']}
                        text={
                            <RegularText>
                                Pagamento na entrega <br />
                                <strong>Cartão de Crédito</strong>
                            </RegularText>
                        }
                    />
                </C.OrderDetailsContainer>

                <img src={confirmedOrderIllustration} alt="" />
            </section>
        </C.OrderConfirmedContainer>
    )
}