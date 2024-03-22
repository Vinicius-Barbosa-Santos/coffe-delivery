import React from 'react'
import ReactDOM from 'react-dom/client'
import { Router } from './Routes.tsx'
import { GlobalStyle } from './styles/global.ts'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/theme/default.ts'
import { BrowserRouter } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
        <GlobalStyle />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
)
