import React from "react"
import styled from "styled-components"
import Events from "../components/Events/Events"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Tech from "../components/Tech/Tech"
import Vision from "../components/Vision/Vision"
import Provider from "../provider/Provider"
import SeoComponent from "../Seo/Seo"
import { GlobalStyle } from "../style/global"

export default function App() {
  return (
    <Provider>
      <GlobalStyle />
      <SeoComponent />
      <HomePage>
        <Navbar />
        <Home />
        <Events />
        <Vision />
        <Tech />
      </HomePage>
    </Provider>
  )
}

const HomePage = styled.div`
  /* margin-top: ${({ theme }) => theme.navbarHeight}; */
  min-height: 100vh;
  min-width: 100%;
`
