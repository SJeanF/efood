import styled from "styled-components";
import background from "../../assets/fundo.png"

export const HomeC = styled.div`
  background-image: url(${background});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 360px;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Logo = styled.img`
  width: 125px;
  height: 58px;
  margin-bottom: 138px;
`

export const HeroMessage = styled.h1`
  font-weight: 900;
  font-size: 36px;
  line-height: 42px;
  color: #E66767;
  max-width: 539px;
  text-align: center;
`
