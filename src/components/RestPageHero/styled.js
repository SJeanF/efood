import styled from "styled-components";
import background from "../../assets/fundo-header.png"

export const RestPageHeroC = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 163px;
  padding: 40px 16px 0;
`;

export const CenterC = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
`

export const Logo = styled.img`
  width: 125px;
  height: 58px;
`

export const HeroMessage = styled.div`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #E66767;
`

export const RestHeroMessage = styled(HeroMessage)`
  cursor: pointer;
`

export const CartMessage = styled(HeroMessage)`
  text-align: right;
`
