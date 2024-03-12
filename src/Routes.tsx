import { Route, Routes } from "react-router-dom"
import { HomePage } from "./pages/Home"
import { DefaultLayout } from './layouts/DefaultLayout'
import { CompleteOrderPage } from './pages/CompleteOrder'

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<DefaultLayout />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/complete-order" element={<CompleteOrderPage />} />
            </Route>
        </Routes>
    )
}