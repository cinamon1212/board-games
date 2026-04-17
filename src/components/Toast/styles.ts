import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
`

export const AlertWrapper = styled.div<{ type: 'danger' | 'success' | 'info' }>`
  position: fixed;
  top: 20px;
  right: 20px;
  min-width: 280px;
  padding: 1rem 1.25rem;
  border-radius: 0.5rem;
  color: white;
  z-index: 2;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: ${fadeIn} 0.3s ease-out;

  ${({ type }) =>
    type === 'danger' &&
    css`
      background-color: #f87171; /* красный */
    `}
  ${({ type }) =>
    type === 'success' &&
    css`
      background-color: #34d399; /* зелёный */
    `}
  ${({ type }) =>
    type === 'info' &&
    css`
      background-color: #60a5fa; /* синий */
    `}
`

export const AlertTitle = styled.p`
  font-weight: bold;
  margin-bottom: 0.25rem;
`

export const AlertMessage = styled.p`
  margin: 0;
`

export const CloseButton = styled.span`
  position: absolute;
  top: 5px;
  right: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1.2rem;
`
