import styled from 'styled-components'

export const FormCard = styled.form`
  max-width: 400px;
  margin: 2rem auto;
  padding: 2rem;
  border-radius: 8px;
  background: #302101;
  box-shadow: -4px -4px 5px -4px #4f4237 inset;
`

export const FormTitle = styled.h1`
  margin-bottom: 1.5rem;
  text-align: center;
`

export const FormControl = styled.div<{ $invalid?: boolean }>`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  gap: 0.25rem;

  small {
    color: #f87171;
    margin-top: 0.25rem;
  }
`

export const LimitText = styled.div`
  margin-top: 1rem;
  color: #f87171;
  text-align: center;
`
