import styled from 'styled-components'

export const TableCell = styled.td`
  border: 0.5px solid #575553;
  padding: 12px;
  text-align: center;
  width: fit-content;

  color: ${props => props.color};

  @media (max-width: 500px) {
    padding: 8px;
  }
`
export const TableStyled = styled.table`
  border-collapse: separate;
  width: 100%;
  overflow: hidden;
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
  max-width: 100%;
  width: 100%;
  border: 0.5px solid #575553;
  border-radius: 12px;
  scrollbar-width: thin;
`
