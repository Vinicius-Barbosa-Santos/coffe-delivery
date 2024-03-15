import { InputHTMLAttributes } from 'react'
import * as C from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement>

export const Input = ({ ...props }: InputProps) => {
    return <C.InputStyleContainer {...props} />
}