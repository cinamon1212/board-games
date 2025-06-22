import { BREAK_POINTS } from '@/constants'
import styled, { CSSProperties } from 'styled-components'

export const TableRow = styled.tr<{
  $hoverBgColor?: CSSProperties['backgroundColor']
}>`
  tbody & {
    &:hover td {
      background-color: ${(props) => props.$hoverBgColor};
      transition: all 0.3s ease-in-out;
    }
  }
  thead & {
    th:hover {
      background-color: ${(props) => props.$hoverBgColor};
      transition: all 0.3s ease-in-out;
    }
  }
`

export const TableCell = styled.td<{
  $hoverBgColor?: CSSProperties['backgroundColor']
  $bgColor?: CSSProperties['backgroundColor']
  $color?: CSSProperties['color']
}>`
  border-bottom: 0.5px solid #57555380;
  border-right: 0.5px solid #57555380;
  padding: 12px;
  text-align: center;
  width: fit-content;
  position: relative;

  ${({ $color }) =>
    $color &&
    `
      background: ${$color};
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
  
      background-clip: text;
      color: transparent;
    `}
  color: ${(props) => props.color};
  background-color: ${(props) => props.$bgColor};

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
  border-spacing: 0;

  @media (max-width: ${BREAK_POINTS.sm}) {
    font-size: 12px;
    width: 100%;
    margin: 0;
  }
`

export const TableWrapper = styled.div`
  overflow: hidden;
  max-width: 100%;
  width: 100%;
  border: 0.5px solid #575553cc;
  border-radius: 12px;
  scrollbar-width: thin;

  @media (max-width: ${BREAK_POINTS.sm}) {
    overflow-x: scroll;
  }
`
export const SortIcon = styled.span`
  position: absolute;
  right: 12px;
`
