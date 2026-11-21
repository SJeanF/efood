import styled from "styled-components";

export const MenuItemC = styled.div`
  width: 100%;
  max-width: 320px;
  height: 338px;
  background-color: #E66767;
  padding: 8px;
  display: flex;
  flex-direction: column;
`

export const MenuItemHero = styled.img`
  width: 100%;
  height: 167px;
  object-fit: cover;
`

export const ItemTitle = styled.h3`
  margin-top: 8px;
  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  color: #FFEBD9;
  text-align: start;
`

export const ItemDesc = styled.p`
  flex: 1;
  margin: 9px 0 7px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  overflow: hidden;
`

export const AddCartButton = styled.button`
  width: 100%;
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  color: #E66767;
  background-color: #FFEBD9;
  border: none;
  cursor: pointer;
`
