import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .8);
  display: flex;
  justify-content: flex-end;
  z-index: 3;
`

export const Sidebar = styled.aside`
  width: 360px;
  max-width: 100%;
  height: 100%;
  background-color: #E66767;
  padding: 32px 8px 8px;
  overflow-y: auto;
`

export const ItemList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Item = styled.li`
  position: relative;
  display: flex;
  gap: 8px;
  height: 100px;
  padding: 8px;
  background-color: #FFEBD9;
`

export const ItemImage = styled.img`
  flex-shrink: 0;
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const ItemTitle = styled.h3`
  font-weight: 900;
  font-size: 18px;
  line-height: 21px;
  color: #E66767;
`

export const ItemPrice = styled.p`
  margin-top: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #E66767;
`

export const RemoveButton = styled.button`
  position: absolute;
  right: 8px;
  bottom: 8px;
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

export const Empty = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  text-align: center;
`

export const TotalRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 40px 0 16px;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #FFEBD9;
`

export const ContinueButton = styled.button`
  width: 100%;
  padding: 4px;
  border: none;
  background-color: #FFEBD9;
  color: #E66767;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: center;
  cursor: pointer;

  &:disabled {
    opacity: .6;
    cursor: not-allowed;
  }
`

export const StepTitle = styled.h3`
  font-weight: 700;
  font-size: 18px;
  line-height: 21px;
  color: #FFEBD9;
  margin-bottom: 14px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`

export const Row = styled.div`
  display: grid;
  grid-template-columns: ${({ $cols }) => $cols || '1fr 1fr'};
  gap: ${({ $gap }) => $gap || '34px'};
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 8px;
  min-width: 0;

  label {
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: #FFEBD9;
  }

  input {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 2px solid #FFEBD9;
    background-color: #FFEBD9;
    color: #4B4B4B;
    font-weight: 700;
    font-size: 14px;
  }

  input:focus {
    outline: none;
    border-color: #4B4B4B;
  }

  input:invalid:not(:placeholder-shown) {
    border-color: #8B0000;
  }
`

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 8px;
`

export const ErrorMessage = styled.p`
  margin-top: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  color: #FFFFFF;
`

export const Text = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #FFEBD9;
  margin-bottom: 22px;
`

export const ConcludeButton = styled(ContinueButton)`
  margin-top: 2px;
`
