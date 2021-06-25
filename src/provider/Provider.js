import React from "react"
import { ThemeProvider } from "styled-components"
import { theme } from "../style/global"

const Provider = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}

export default Provider
