import { Input } from '../../../../components/Input'
import * as C from './styles'

export const AddressForm = () => {
    return (
        <C.AddressFormContainer>
            <Input
                placeholder='CEP'
                className='cep'
                type='number'
            />

            <Input
                placeholder='Rua'
                className='street'
                type='number'
            />

            <Input
                placeholder='Número'
                type='number'
            />

            <Input
                placeholder='Complemento'
                className='complement'
            />

            <Input
                placeholder='Bairro'
            />

            <Input
                placeholder='Cidade'
            />

            <Input
                placeholder='UF'
            />
        </C.AddressFormContainer>
    )
}