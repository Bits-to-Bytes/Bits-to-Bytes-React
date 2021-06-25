import styled from "styled-components"

const Wrapper = styled.div.attrs({ id: "vision" })`
  min-height: 100vh;
  min-width: 100%;
  padding: 0 40px;
  display: flex;
  /* align-items: center; */
`

const VisionWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;

  justify-content: space-evenly;
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
