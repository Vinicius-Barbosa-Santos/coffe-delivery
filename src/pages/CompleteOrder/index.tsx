import { CompleteOrderForm } from './components/CompleteOrderForm'
import { SelectedCoffees } from './components/SelectedCoffees'
import * as C from './styles'

export const CompleteOrderPage = () => {
    return (
        <C.CompleteOrderContainer className='container'>
            <CompleteOrderForm />
            <SelectedCoffees />
        </C.CompleteOrderContainer>
    )
}