import styled from 'styled-components'

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 16px;
  background: rgba(7, 8, 12, 0.62);
  backdrop-filter: blur(14px);
`

export const ModalCard = styled.div`
  width: min(100%, 720px);
  max-height: min(90vh, 760px);
  overflow: auto;

  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 28px;
  padding: 28px;

  background:
    linear-gradient(180deg, rgba(49, 34, 24, 0.98), rgba(21, 18, 16, 0.98)),
    #151210;

  box-shadow:
    0 40px 100px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.06);

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE/Edge */

  &::-webkit-scrollbar {
    display: none; /* Chrome/Safari */
  }
`

export const FormHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
`

export const FormTitle = styled.h3`
  font-size: 28px;
  font-weight: 700;
  color: #fff6eb;
`

export const FormSubtitle = styled.p`
  margin-top: 8px;
  color: rgba(255, 246, 235, 0.72);
  line-height: 1.5;
`

export const CloseButton = styled.button`
  border: none;
  background: transparent;
  color: rgba(255, 246, 235, 0.72);
  font-size: 32px;
  line-height: 1;
  cursor: pointer;
  transition:
    color 200ms ease,
    opacity 200ms ease;

  &:hover {
    color: #fff6eb;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const FieldGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  text-align: center;
  gap: 8px;
`

export const FieldLabel = styled.label`
  color: rgba(255, 246, 235, 0.88);
  font-size: 14px;
  font-weight: 600;
`

export const AddPlayerButton = styled.button`
  border: 1px dashed rgba(242, 153, 74, 0.56);
  border-radius: 18px;
  padding: 14px 18px;
  background: rgba(242, 153, 74, 0.08);
  color: #f8bb82;
  font-weight: 600;
  cursor: pointer;
  transition:
    background 200ms ease,
    border-color 200ms ease,
    opacity 200ms ease;

  &:hover {
    background: rgba(242, 153, 74, 0.14);
    border-color: rgba(242, 153, 74, 0.78);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const RemovePlayerButton = styled.button`
  margin-top: 25px;
  align-self: center;
  border: none;
  border-radius: 18px;
  padding: 14px 18px;
  background: rgba(255, 255, 255, 0.08);
  color: rgba(255, 246, 235, 0.76);
  font-weight: 600;
  cursor: pointer;
  transition:
    background 200ms ease,
    color 200ms ease,
    opacity 200ms ease;

  &:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #fff6eb;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`

export const PlayerRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 140px 80px;
  gap: 12px;
  align-items: center;

  /* скрываем label внутри всех rows */
  & label {
    visibility: hidden;
  }

  /* показываем label только в первой строке */
  &:first-of-type label {
    visibility: visible;
  }

  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & > div:nth-child(2) input {
    width: 100%;
  }

  & > button {
    justify-self: center;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    & > div:nth-child(2) {
      justify-content: flex-start;
    }

    & > button {
      justify-self: start;
    }
  }
`

export const ButtonDescription = styled.p`
  color: rgba(255, 246, 235, 0.62);
  line-height: 1.5;
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;
`
