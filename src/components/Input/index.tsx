import { InputHTMLAttributes, forwardRef } from 'react'
import * as C from './styles'
import { RegularText } from '../Typografy'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
    error?: string,
    rightText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ({ error, className, rightText, ...props }, ref) => {
        return (
            <C.InputWrapper className={className}>
                <C.InputStyleContainer hasError={!!error}>
                    <C.InputStyled {...props} ref={ref} />
                    {rightText && <C.RightText>{rightText}</C.RightText>}
                </C.InputStyleContainer>
                {error && (
                    <RegularText size='s'>{error}</RegularText>
                )}
            </C.InputWrapper>
        )
    }
)