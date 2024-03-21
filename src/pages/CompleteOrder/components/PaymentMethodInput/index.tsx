import { CreditCard } from 'phosphor-react'
import * as C from './styles'


export const PaymentMethodInput = () => {
    return (
        <C.PaymentMethodContainer>
            <CreditCard size={16} />
            Cartão de crédito
        </C.PaymentMethodContainer>
    )
}