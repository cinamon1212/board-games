import { BREAK_POINTS } from '@/constants'
import styled, { CSSProperties } from 'styled-components'

export const TableCell = styled.td<{
  $hoverBgColor?: CSSProperties['backgroundColor']
  $bgColor?: CSSProperties['backgroundColor']
}>`
  border: 0.5px solid #575553;
  padding: 12px;
  text-align: center;
  width: fit-content;
  position: relative;
  transition: all 0.3s ease-in-out;

  color: ${(props) => props.color};
  background-color: ${(props) => props.$bgColor};

  &:hover {
    background-color: ${(props) => props.$hoverBgColor};
  }

  @media (max-width: ${BREAK_POINTS.sm}) {
    padding: 8px;
  }
`
export const TableStyled = styled.table`
  border-collapse: separate;
  width: 100%;
  overflow: hidden;
  min-width: 400px;
  margin: 0 auto;

  @media (max-width: ${BREAK_POINTS.sm}) {
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
export const SortIcon = styled.span`
  position: absolute;
  right: 12px;
`
