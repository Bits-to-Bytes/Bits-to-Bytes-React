import { motion } from "framer-motion"
import styled from "styled-components"
import { device } from "../../style/mediaQueries"

const Wrapper = styled.div.attrs({ id: "events" })`
  min-height: 100vh;
  min-width: 100%;
  text-align: center;
  p {
    color: ${({ theme }) => theme.textColor};
  }
  padding: 0 40px;
  @media ${device.mobileL} {
    padding: 0 20px;
  }
`

const Event = styled(motion.section)`
  width: 100%;
  display: grid;
  min-height: 300px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  @media ${device.mobileL} {
    min-height: fit-content;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  place-self: center;
  text-align: left;
  p {
    font-size: ${({ theme }) => theme.textSM};
  }
  @media ${device.mobileL} {
    align-items: center;
    text-align: center;
  }
`

const Childrens = styled.div`
  display: flex;
  flex-direction: column;
`

export { Wrapper, Childrens, Event, Info }
