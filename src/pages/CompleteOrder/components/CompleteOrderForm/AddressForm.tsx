import { useFormContext } from 'react-hook-form'
import { Input } from '../../../../components/Input'
import * as C from './styles'

interface ErrorsType {
    errors: {
        [key: string]: {
            message: string,
        }
    }
}

export const AddressForm = () => {

    const { register, formState } = useFormContext()
    const { errors } = formState as unknown as ErrorsType

    return (
        <C.AddressFormContainer>
            <Input
                placeholder='CEP'
                className='cep'
                type='number'
                {...register('cep')}
                error={errors.cep?.message}
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