import { PaymentMethodInput } from '../PaymentMethodInput'
import * as C from './styles'

export const PaymentMethodOptions = () => {
    return(
        <C.PaymentMethodOptionsContainer>
            <PaymentMethodInput />
            <PaymentMethodInput />
            <PaymentMethodInput />
        </C.PaymentMethodOptionsContainer>
    )
}