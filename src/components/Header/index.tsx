import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles"

import coffeeLogoImg from '../../assets/logo.svg'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from "react-router-dom"

export const Header = () => {
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
                            <ShoppingCart size={20} weight="fill" />
                        </HeaderButton>
                    </NavLink>
                </HeaderButtonsContainer>
            </div>
        </HeaderContainer>
    )
}