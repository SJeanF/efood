import styled from "styled-components";

export const HomeC = styled.main``

export const ResList = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 80px auto 120px;
  padding: 0 16px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 48px 80px;
  justify-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`
