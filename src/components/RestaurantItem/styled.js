import styled from "styled-components";

export const RestItemC = styled.div`
  max-width: 472px;
  max-height: 398px;
  border: 1px solid #E66767;
  border-top: none;
`

export const TopC = styled.div`
  max-height: 217px;
  margin-bottom: 8px;
  position: relative;
`

export const EmphasisC = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: default;

  :last-child {
    margin-left: 16px;
  }
`

export const RestImage = styled.img`
  width: 472px;
  height: 217px;
  object-fit: fill
`

export const MidBottonC = styled.div`
  padding: 16px;
  padding-top: 0;
`

export const MidC = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`

export const RestTitle = styled.h4`
  font-size: 18px;
  color: #E66767;
  font-weight: bold;
`

export const StarC = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Note = styled.h5`
  font-size: 18px;
  color: #E66767;
  font-weight: 700;
  text-align: center;
  margin-right: 8px;
`

export const Star = styled.img``

export const BottomC = styled.div`
  margin-bottom: 16px;
`

export const RestDesc = styled.p`
  max-width: 456px;
  height: 88px;
  font-size: 14x;
  color: #E66767;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 4px;
  display: -webkit-box;
  -webkit-line-clamp: 4; 
  -webkit-box-orient: vertical;
  overflow: hidden;
`

export const ButtonStyle = styled.button`
  background-color: #E66767;
  color: white;
  border: none;
  padding: 8px;
`

export const Button = styled(ButtonStyle)`
  cursor: pointer;
`

