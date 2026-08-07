import styled from "styled-components";

export const FooterC = styled.div`
  background-color: #FFEBD9;
  text-align: center;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Logo = styled.img`
  margin-top: 48px;
  margin-bottom: 48px;
`

export const SocialMediaC = styled.div`
  margin-bottom: 64px;

  :last-child {
    margin: 0;
  }
`

export const SocialMediaIcon = styled.img`
  margin-right: 8px;
`

export const Copy = styled.p`
  text-align: center;
  font-weight: 400;
  font-size: 10px;
  color: #E66767;
  max-width: 480px;
`