import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles"

import coffeeLogoImg from '../../assets/logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom"
import { useCart } from "../../context/CartContext"

export const Header = () => {

    const { cartQuantity } = useCart()

    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to={'/'}>
                    <img src={coffeeLogoImg} alt="" />
                </NavLink>

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill" />
                        Porto Alegre, RS
                    </HeaderButton>

                    <NavLink to={'/complete-order'}>
                        <HeaderButton variant="yellow">
                            {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}