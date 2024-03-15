import { CompleteOrderForm } from './components/CompleteOrderForm'
import * as C from './styles'

export const CompleteOrderPage = () => {
    return (
        <C.CompleteOrderContainer className='container'>
            <CompleteOrderForm />
        </C.CompleteOrderContainer>
    )
}