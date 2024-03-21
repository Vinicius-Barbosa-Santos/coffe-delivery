import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrderPage } from './pages/CompleteOrder'
import { OrderConfirmedPage } from "./pages/OrderConfirmed"

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/complete-order" element={<CompleteOrderPage />} />
                <Route path="/order-confirmed" element={<OrderConfirmedPage />} />
            </Route>
        </Routes>
    )
}