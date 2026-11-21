import styled from "styled-components";

export const RestPageC = styled.div`
`

export const TopC = styled.div`
`

export const MenuC = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 56px 16px 120px;
`

export const MenuList = styled.main`
  width: 100%;
  max-width: 1024px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 32px;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`
