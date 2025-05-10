import styled from "styled-components";

export const LegendList = styled.ul`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  gap: 32px;
  align-items: center;
  justify-content: center;
  height: auto;
  list-style: none;
  font-size: 16px;

  @media (max-width: 900px) {
    gap: 24px;
    font-size: 14px;
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 100%;
    gap: 12px;
    font-size: 12px;
  }
`

export const Name = styled.li`
  color: ${props => props?.color};
`