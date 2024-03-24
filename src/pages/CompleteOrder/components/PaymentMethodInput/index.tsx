import * as C from './styles'
import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
    icon: ReactNode
    label: string
}

export const PaymentMethodInput = forwardRef<HTMLInputElement, PaymentMethodInputProps>(({ id, icon, label, ...props }, ref) => {
    return (
        <C.PaymentMethodContainer>
            <input id={id} type="radio" {...props} name='paymentMethod' ref={ref} />
            <label htmlFor={id}>
                <C.ContentContainer>
                    {icon}
                    {label}
                </C.ContentContainer>
            </label>
        </C.PaymentMethodContainer>
    )
})