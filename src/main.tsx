import 'react-toastify/dist/ReactToastify.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Routes.tsx'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.ts'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext.tsx'
import { ToastContainer } from 'react-toastify'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
          <ToastContainer />
          <GlobalStyle />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
