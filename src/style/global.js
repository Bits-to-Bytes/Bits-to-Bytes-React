import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    *{  
       
        padding:0;
        margin:0;
        box-sizing:border-box;
        font-family: 'Poppins', sans-serif;
    }
    body::-webkit-scrollbar {
  width: 6px;
  border-radius: 50px;
  background-color: #D8D8D8;
}

body::-webkit-scrollbar-thumb {
  background-color: #4f39f4b6;
  border-radius: 50px;
}
`

const theme = {
  midColor: "#cf8bf3",
  textColor: "#4c4e52;",
  primaryColor: "#0E153A",
  iconColor: "#838383",
  accentColor: "#22D1EE",
  navBackGround: "#3D5AF1",
  navbarHeight: "4rem",
  headingColor: "white",
  headingLG: "4rem",
  headingMD: "3rem",
  headingSM: "2rem",
  textLG: "1.5rem",
  textMD: "1.3rem",
  textSM: "1rem",
  boxShadow: "5px 5px 25px rgba(0,0,0,0.2)",
  gradient:
    "linear-gradient(90deg, rgba(135, 67, 255, 1) 0%, rgba(65, 54, 241, 1) 100%)",
}

export { GlobalStyle, theme }
