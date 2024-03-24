import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as C from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'

const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, 'Informe o CEP'),
    street: zod.string().min(1, "Informe a Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
})

export type OrderData = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData

export const CompleteOrderPage = () => {
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm

    const handleConfirmOrder = (data: ConfirmOrderFormData) => {
        console.log(data)
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <C.CompleteOrderContainer className='container' onSubmit={handleSubmit(handleConfirmOrder)}>
                <CompleteOrderForm />
                <SelectedCoffees />
            </C.CompleteOrderContainer>
        </FormProvider>
    )
}