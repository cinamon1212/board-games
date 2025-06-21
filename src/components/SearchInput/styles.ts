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

export const Input = styled.input`
  font-family: 'Open Sans', sans-serif;
  width: 100%;
  border-radius: 16px;
  background: radial-gradient(circle, #42372e, #2b241e);
  padding: 12px 42px;
  box-shadow: -4px -4px 5px -4px #4f4237 inset;
  border: none;
  transition: box-shadow 300ms ease;
  color: whitesmoke;
  font-size: 16px;

  &::placeholder {
    color: #696969;
  }

  &:hover,
  &:focus {
  box-shadow: -6px -6px 5px -4px #4f4237 inset;
    outline: none;
  }
`

export const InputIcon = styled.img`
  position: absolute;
  width: 21px;
  height: 21px;
`
