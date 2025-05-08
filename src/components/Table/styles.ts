import styled from 'styled-components'

export const TableCell = styled.td`
  border: 0.5px solid #575553;
  padding: 12px;
  text-align: center;
  width: fit-content;

  @media (max-width: 500px) {
    padding: 8px;
  }
`
export const TableStyled = styled.table`
  border-collapse: separate;
  width: 100%;
  border-radius: 12px;
  border: 0.5px solid #575553;
  overflow: hidden;
  width: 80%;
  min-width: 400px;
  margin: 0 auto;

  @media (max-width: 500px) {
    font-size: 12px;
    width: 100%;
    margin: 0;
  }
`

export const TableWrapper = styled.div`
  overflow-x: scroll;
  width: 100%;
`
