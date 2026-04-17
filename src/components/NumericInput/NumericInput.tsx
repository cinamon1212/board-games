'use client'

import styled from 'styled-components'
import { InputHTMLAttributes } from 'react'

type NumericInputProps = InputHTMLAttributes<HTMLInputElement>

const StyledInput = styled.input`
  width: 100%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 18px;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.04);
  color: #fff6eb;
  font-size: 15px;
  transition:
    border-color 200ms ease,
    background 200ms ease,
    opacity 200ms ease;

  &:focus {
    outline: none;
    border-color: rgba(242, 153, 74, 0.8);
    background: #13100c !important;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const NumericInput = (props: NumericInputProps) => {
  return <StyledInput {...props} />
}
