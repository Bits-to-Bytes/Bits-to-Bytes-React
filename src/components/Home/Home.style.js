import styled from "styled-components"
import { motion } from "framer-motion"
import { device } from "../../style/mediaQueries"

const Wrapper = styled(motion.div).attrs({ id: "home" })`
  min-height: 100vh;
  min-width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  padding: 0 40px;

  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    padding: 0 20px;
  }
`

const Info = styled(motion.div)`
  place-self: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;

  width: 100%;
  p {
    color: ${({ theme }) => theme.textColor};
    font-size: ${({ theme }) => theme.textSM};
  }

  @media ${device.mobileL} {
    text-align: center;
    align-items: center;
  }
`

export { Wrapper, Info }
