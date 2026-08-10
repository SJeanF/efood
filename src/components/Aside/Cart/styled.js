import styled from "styled-components";

export const CartC = styled.div`
  padding: 8px; 
`

export const CartItemList = styled.div`
  max-height: 85svh;
  overflow-y: scroll;
  margin-bottom: 16px;
  padding-inline: 8px;
`

export const TotC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
`

export const TotText = styled.p`
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  text-align: center;
  color: #FFEBD9;
`

export const ButtonC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContinueButton = styled.div`
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  text-align: center;
  background-color: #FFEBD9;
  color: #E66767;
  padding: 4px; 
  width: 90%;
  cursor: pointer;
`