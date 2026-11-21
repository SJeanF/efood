import styled from "styled-components";

export const SafeArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 16px;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

export const ModalC = styled.div`
  background-color: #E66767;
  width: 100%;
  max-width: 1024px;
  max-height: 100%;
  overflow-y: auto;
  padding: 32px;
  position: relative;
  display: flex;
  gap: 24px;

  @media (max-width: 720px) {
    flex-direction: column;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;

  img {
    width: 16px;
    height: 16px;
  }
`

export const DishImage = styled.img`
  flex-shrink: 0;
  width: 280px;
  height: 280px;
  object-fit: cover;
`

export const InfosC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const DishTitle = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #FFFFFF;
  margin-bottom: 16px;
`

export const DishDesc = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  margin-bottom: 22px;
`

export const Portion = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFFFFF;
  margin-bottom: 16px;
`

export const AddCartButton = styled.button`
  background-color: #FFEBD9;
  color: #E66767;
  border: none;
  padding: 4px 6px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;
`
