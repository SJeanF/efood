import styled from "styled-components";

export const DisplayC = styled.div`
  width: 100%;
  height: 280px;
  position: relative;
  overflow: hidden;
`

export const DisplayImageC = styled.div`
  position: absolute;
  inset: 0;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(0, 0, 0, .5);
    pointer-events: none;
  }
`

export const DisplayImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const TextC = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  max-width: 1024px;
  height: 100%;
  margin: 0 auto;
  padding: 24px 16px 28px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Highlight = styled.p`
  font-size: 32px;
  line-height: 38px;
  font-weight: 100;
  color: #FFFFFF;
`

export const RestName = styled.h2`
  font-weight: 900;
  font-size: 32px;
  line-height: 38px;
  color: #FFFFFF;
`
