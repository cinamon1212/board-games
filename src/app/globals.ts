import styled from 'styled-components'

export const Input = styled.input`
  font-family: var(--font-open-sans), sans-serif;
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

export const ButtonPrimary = styled.button`
  font-family: var(--font-open-sans), sans-serif;
  width: 100%;
  border-radius: 16px;
  background: #4f4237;
  padding: 12px 42px;
  box-shadow: -4px -4px 5px -4px #2b241e inset;
  border: none;
  transition: box-shadow 300ms ease;
  color: whitesmoke;
  font-size: 16px;

  &::placeholder {
    color: #696969;
  }

  &:hover,
  &:focus {
    box-shadow: -6px -6px 5px -4px #2b241e inset;
    outline: none;
  }
`
export const LinkWrapper = styled.div`
  margin-top: 0.5rem;
  text-align: center;

  a {
    color: #d2691e;

    &:hover {
      text-decoration: underline;
    }
  }
`
