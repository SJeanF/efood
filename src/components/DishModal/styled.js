import styled from "styled-components";

export const SafeArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100svw;
  height: 100svh;
  background-color: rgba(0, 0, 0, .4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const ModalC = styled.div`
  background-color: #E66767;
  max-width: 1024px;
  padding: 32px;
  position: relative;
  display: flex
`

export const CloseButton = styled.img`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
`

export const DishImage = styled.img``

export const InfosC = styled.div`
  margin-left: 32px;
`

export const DishTitle = styled.p`
  font-weight: 900;
  font-size: 18px;
  color: white;
`

export const DishDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: white;
  margin-bottom: 16px;
`

  export const Portion = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0%;
  color: white;
  margin-bottom: 16px;
`

export const AddCartButton = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px;
  font-weight: 700;
  font-style: Bold;
  font-size: 14px;
  text-align: center;
  cursor: pointer;
`