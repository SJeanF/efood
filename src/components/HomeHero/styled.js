import styled from "styled-components";
import background from "../../assets/fundo.png"

export const HomeC = styled.div`
  background-image: url(${background}); 
  width: 100svw;
  min-height: 384px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CenterC = styled.div`
  text-align: center;
`

export const Logo = styled.img`
  max-width: 128px;
  margin-bottom: 128px;
`

export const HeroMessage = styled.div`
  font-weight: 900;
  font-size: 36px;
  color: #E66767;
  max-width: 539px;
  text-align: center;
`