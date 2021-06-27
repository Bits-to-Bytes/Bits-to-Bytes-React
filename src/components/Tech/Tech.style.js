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
    margin-top: 20rem;
    padding: 0 20px;
  }
`

const TechCardWrapper = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;

  .info {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    text-align: left;
  }
  &:nth-child(even) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    .animation {
      grid-column: 2/2;
      grid-row: 1/1;
    }
    .info {
      align-items: flex-end;
      text-align: right;
      grid-row: 1/1;
      grid-column: 1/1;
    }
  }
  @media ${device.mobileL} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;

    .info {
      align-items: center;
      text-align: center;
    }

    &:nth-child(even) {
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr;
      .animation {
        grid-row: 1/1;
        grid-column: 1/1;
      }
      .info {
        align-items: center;
        grid-row: 2/2;
        text-align: center;
        grid-column: 1/1;
      }
    }
  }
`

const Childrens = styled.div`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 3rem;
  @media ${device.mobileL} {
    margin-top: 3rem;
  }
`

export { Wrapper, Childrens, TechCardWrapper }
