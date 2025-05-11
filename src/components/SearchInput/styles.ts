import styled from 'styled-components'

export const SearchInputWrapper = styled.section`
  width: 300px;
  height: 42px;
  display: flex;
  align-items: center;
  position: relative;
`

export const Input = styled.input`
  font-family: 'Geist Mono', 'Geist Mono Fallback';
  width: 100%;
  border-radius: 16px;
  background-color: #474746;
  padding: 12px 34px;
  box-shadow: #474746 -4px 9px 25px -6px;
  border: none;
  transition: box-shadow 300ms ease;
  color: whitesmoke;
  font-size: 16px;

  &::placeholder {
    color: #858585;
  }

  &:hover,
  &:focus {
    box-shadow: #735b44 -4px 9px 25px -6px;
    outline: none;
  }
`

export const SearchIcon = styled.img`
  position: absolute;
  left: 5px;
  width: 21px;
  height: 21px;
`
export const CloseIcon = styled.img`
  position: absolute;
  width: 21px;
  height: 21px;
  right: 5px;

  &:hover {
    cursor: pointer;
  }
`
