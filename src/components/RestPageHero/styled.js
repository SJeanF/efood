import styled from "styled-components";
import background from "../../assets/fundo.png"

export const RestPageHeroC = styled.div`
  background-image: url(${background}); 
  width: 100svw;
  min-height: 186px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterC = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

export const Logo = styled.img`
  max-width: 128px;
`

export const HeroMessage = styled.div`
  font-weight: 900;
  font-size: 18px;
  color: #E66767;
  text-align: center;
`

export const RestHeroMessage = styled(HeroMessage)`
  cursor: pointer;
`