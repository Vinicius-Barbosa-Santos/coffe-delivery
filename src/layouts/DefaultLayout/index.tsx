import { Outlet } from "react-router-dom"
import { Container } from "./styles"

export const DefaultLayout = () => {
    return(
        <Container>
            <h2>header</h2>
            <Outlet />
        </Container>
    )
}