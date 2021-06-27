import styled from "styled-components"
import { device } from "../../style/mediaQueries"

const Wrapper = styled.footer`
  margin-top: 6rem;
  min-height: 100px;
  width: 100%;
  display: flex;
  background: ${({ theme }) => theme.gradient};
  box-shadow: 0px -10px 24px 0px rgba(0, 0, 0, 0.2);
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;

  @media ${device.mobileL} {
    margin-top: 3rem;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
`

const AddressBox = styled.div`
  margin: 10px 40px;
  max-width: 300px;
  .address,
  a {
    text-decoration: none;
    text-align: start;
    color: white;
    @media ${device.mobileL} {
      text-align: center;
    }
  }
`

const SocialMedia = styled.div`
  background: white;
  min-width: 300px;
  padding: 20px;
  align-items: center;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  margin: 20px 40px;
`

export { Wrapper, AddressBox, SocialMedia }
