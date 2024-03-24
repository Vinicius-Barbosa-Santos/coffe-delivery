import { InputHTMLAttributes, forwardRef } from 'react'
import * as C from './styles'
import { RegularText } from '../Typografy'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ error, className, ...props }, ref) => {
        return (
            <C.InputWrapper className={className}>
                <C.InputStyleContainer {...props} ref={ref} />
                {error && (
                    <RegularText size='s'>{error}</RegularText>
                )}
            </C.InputWrapper>
        )
    }
)