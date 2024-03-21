import { TitleText } from '../../../../components/Typografy'
import { SectionTitle } from '../SectionTitle'
import { MapPinLine, CurrencyDollar} from 'phosphor-react'
import * as C from './styles'
import { useTheme } from 'styled-components'
import { AddressForm } from './AddressForm'
import { PaymentMethodOptions } from './PaymentMethodOptions'

export const CompleteOrderForm = () => {
    const { colors } = useTheme()

    return (
        <C.CompleteOrderFormContainer>
            <TitleText size='xs' color='subtitle'>Complete seu pedido</TitleText>

            <C.FormSectionContainer>
                <SectionTitle
                    title='Endereço de Entrega'
                    subtitle='Informe o endereço onde deseja receber seu pedido'
                    icon={<MapPinLine color={colors['brand-yellow-dark']} size={22} />}
                />

                <AddressForm />
            </C.FormSectionContainer>

            <C.FormSectionContainer>
                <SectionTitle
                    title='Pagamento'
                    subtitle='O pagamento é feito na entrega. Escolha a forma que deseja pagar'
                    icon={<CurrencyDollar color={colors['brand-purple']} size={22} />}
                />

                <PaymentMethodOptions />
            </C.FormSectionContainer>
        </C.CompleteOrderFormContainer>
    )
}