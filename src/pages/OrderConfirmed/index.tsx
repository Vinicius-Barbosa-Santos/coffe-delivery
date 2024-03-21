import { RegularText, TitleText } from '../../components/Typografy'
import * as C from './styles'

export const OrderConfirmedPage = () => {
    return (
        <C.OrderConfirmedContainer className='container'>
            <div>
                <TitleText size='l'>Uhu! Pedido confirmado</TitleText>
                <RegularText size='l' color='subtitle'>Agora é só aguardar que logo o café chegará até você</RegularText>
            </div>
        </C.OrderConfirmedContainer>
    )
}