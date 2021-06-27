import styled from "styled-components"
import { device } from "../../style/mediaQueries"

const Wrapper = styled.div.attrs({ id: "vision" })`
  min-height: 100vh;
  min-width: 100%;
  padding: 0 40px;
  display: flex;
  @media ${device.mobileL} {
    padding: 0 20px;
  }
`

const VisionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
  @media ${device.mobileL} {
    gap: 3rem;
    margin-top: 3rem;
  }
`

const VisionCard = styled.div`
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  gap: 1rem;
  border-radius: 12px;
  flex-direction: column;
  height: fit-content;
  max-height: 400px;
  max-width: 300px;
  padding: 1rem;
  transition: all 0.3s linear;
  i {
    font-size: 3rem;
  }

  p {
    color: ${({ theme }) => theme.textColor};
  }
  &:hover {
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.4);
  }
`

export { Wrapper, VisionWrapper, VisionCard }
