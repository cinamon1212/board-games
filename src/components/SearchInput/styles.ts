import { BREAK_POINTS } from '@/constants'
import styled from 'styled-components'

export const SearchInputWrapper = styled.section`
  width: 300px;
  height: 42px;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 1;

  @media (max-width: ${BREAK_POINTS.md}) {
    width: 100%;
  }
`

export const InputIcon = styled.img`
  position: absolute;
  width: 21px;
  height: 21px;
`
