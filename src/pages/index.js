import React from "react"
import styled from "styled-components"
import Blogs from "../components/Blogs/Blogs"
import Events from "../components/Events/Events"
import Footer from "../components/Footer/Footer"
import Home from "../components/Home/Home"
import Navbar from "../components/Navbar/Navbar"
import Team from "../components/Team/team"
import Tech from "../components/Tech/Tech"
import Vision from "../components/Vision/Vision"
import Provider from "../provider/Provider"
import SeoComponent from "../Seo/Seo"
import { GlobalStyle } from "../style/global"
import { size } from "../style/mediaQueries"

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
        <Blogs />
        <Tech />
        <Team />
        <Footer />
      </HomePage>
    </Provider>
  )
}

const HomePage = styled.main`
  /* margin-top: ${({ theme }) => theme.navbarHeight}; */
  min-height: 100vh;
  min-width: 100%;
  max-width: ${size.laptopL};
`
