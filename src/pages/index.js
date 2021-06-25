import React from "react"
import styled from "styled-components"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Provider from "../provider/Provider"
import { GlobalStyle } from "../style/global"

export default function App() {
  return (
    <Provider>
      <GlobalStyle />
      <HomePage>
        <Navbar />
        <Home />
      </HomePage>
    </Provider>
  )
}

const HomePage = styled.div`
  margin-top: ${({ theme }) => theme.navbarHeight};
  min-height: 100vh;
  min-width: 100%;
`
