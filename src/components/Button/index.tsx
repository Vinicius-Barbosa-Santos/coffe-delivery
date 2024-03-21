import { ButtonHTMLAttributes } from 'react'
import * as C from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    text: string | number
}

export const Button = ({text, ...props} : ButtonProps) => {
    return(
        <C.ButtonContainer {...props}>
            {text}
        </C.ButtonContainer>
    )
}