import styled from "styled-components";

export const CartItemC = styled.div`
  display: flex;
  align-items: center;
  background-color: #FFEBD9;
  padding: 8px;
  margin-bottom: 16px;
`

export const DishImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: fill;
`

export const InfosC = styled.div`
  width: 100%;
  position: relative;
`

export const Title = styled.p`
  font-weight: 900;
  font-style: Black;
  font-size: 18px;
  color: #E66767;
  margin-bottom: 4px;
`

export const Price = styled.span`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #E66767;
`

export const TrashIcon = styled.img`
  display: block;
  position: absolute;
  bottom: -16px;
  right: 8px;
  cursor: pointer;
`