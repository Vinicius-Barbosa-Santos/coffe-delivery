import { Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentMethodInput } from '../PaymentMethodInput'
import * as C from './styles'

const paymentMethods = {
    credit: {
        label: 'Cartão de Crédito',
        icon: <CreditCard size={16} />
    },
    debit: {
        label: 'Cartão de débito',
        icon: <Bank size={16} />
    },
    money: {
        label: 'Dinheiro',
        icon: <Money size={16} />
    }
}

export const PaymentMethodOptions = () => {
    return (
        <C.PaymentMethodOptionsContainer>

            {Object.entries(paymentMethods).map(([key, { label, icon }]) => (
                <PaymentMethodInput
                    id={key}
                    key={label}
                    icon={icon}
                    label={label}
                    value={key}
                />
            ))}
        </C.PaymentMethodOptionsContainer>
    )
}