import styled from "styled-components"

const Wrapper = styled.div.attrs({ id: "blogs" })`
  min-height: 100vh;
  height: fit-content;
  min-width: 100%;
  text-align: center;
  p {
    color: ${({ theme }) => theme.textColor};
  }
  padding: 0 40px;
`

const BlogWrapper = styled.div`
  padding: 1rem;
  min-height: 300px;
  max-height: 390px;
  min-width: 250px;
  max-width: 350px;
  background-color: white;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.boxShadow};
  display: flex;
  flex-direction: column;
  transition: all 0.3s linear;
  gap: 1rem;
  .content {
    gap: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
      font-size: 14px;
    }
  }

  &:hover {
    box-shadow: 5px 5px 25px rgba(0, 0, 0, 0.4);
  }
`

const Childrens = styled.div`
  margin: 6rem 0;
  height: 500px;
  width: 100%;
  display: flex;
  gap: 1rem;
  justify-content: space-evenly;
`

export { Wrapper, Childrens, BlogWrapper }
