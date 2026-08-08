import styled from "styled-components";

export const DisplayC = styled.div`
  min-height: 279px;
  width: 100%;
  position: relative;
`

export const DisplayImageC = styled.div`
  position: absolute;
  display: inline-block;
  max-height: 280px;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(0, 0, 0, .5);
    pointer-events: none;
  }

`

export const DisplayImage = styled.img`
  width: 100svw;
  height: 280px;
  object-fit: fill;
`

export const Highlight = styled.p`
  position: absolute;
  top: 16px;
  left: 96px;
  font-style: thin;
  font-size: 32px;
  font-weight: 100;
  color: white;
  z-index: 1;
  `

export const RestName = styled.p`
  position: absolute;
  bottom: 16px;
  left: 96px;
  font-weight: 900;
  font-size: 32px;
  color: white;
  z-index: 1;
`