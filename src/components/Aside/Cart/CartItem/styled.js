import styled from "styled-components";

export const CartItemC = styled.div`
  position: relative;
  height: 100px;
  width: 100%;
  background-color: #FFEBD9;
  display: flex;
  align-items: center;
  padding: 8px;
  margin-bottom: 16px;
`

export const DishImage = styled.img`
  height: 80px;
  width: 80px;
  object-fit: fill;
`

export const DishInfosC = styled.div`
  margin-left: 8px;
`

export const Title = styled.p`
  font-weight: 900;
  font-style: Black;
  font-size: 18px;
  color: #E66767;
  margin-bottom: 16px;
`

export const Price = styled.span`
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 22px;
  color: #E66767;
`

export const TrashIcon = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  cursor: pointer;
`