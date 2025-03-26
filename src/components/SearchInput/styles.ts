import styled from 'styled-components'

export const SearchInputWrapper = styled.section`
  border-radius: 16px;
  height: 42px;
  display: flex;
  align-items: center;
  background-color: #474746;
  width: 300px;
  gap: 12px;
  padding: 0 12px;
  box-shadow: #474746 -4px 5px 15px -6px;
  border: none;
  transition: box-shadow 300ms ease;

  &:hover,
  &:focus {
    box-shadow: #735b44 -4px 5px 15px -6px;
  }
`

export const Input = styled.input`
  height: 100%;
  border: none;
  outline: none;
  background: inherit;
  width: 100%;
  color: whitesmoke;
  font-size: 16px;

  &::placeholder {
    color: #858585;
  }
`

export const SearchIcon = styled.img`
  height: 50%;
`
export const CloseIcon = styled.img`
  height: 50%;

  &:hover {
    cursor: pointer;
  }
`
