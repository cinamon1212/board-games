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
  min-width: 220px;
  border: none;
  border-radius: 18px;
  padding: 16px 20px;
  background: linear-gradient(
    135deg,
    rgba(242, 153, 74, 0.78),
    rgba(242, 153, 74, 0.14)
  );
  color: #fff8ef;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition:
    transform 200ms ease,
    box-shadow 200ms ease,
    opacity 200ms ease;
  box-shadow: 0 22px 44px rgba(242, 153, 74, 0.14);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 28px 50px rgba(242, 153, 74, 0.28);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
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
