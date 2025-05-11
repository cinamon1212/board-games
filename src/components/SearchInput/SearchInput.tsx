import { ChangeEventHandler } from 'react'
import { Input, InputIcon, SearchInputWrapper } from './styles'

type SearchInputProps = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string
}

export const SearchInput = ({ setInputValue, inputValue }: SearchInputProps) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setInputValue(e.target.value)

  const onClose = () => setInputValue('')

  return (
    <SearchInputWrapper>
      <InputIcon src='/search-icon.png' alt='search' style={{ left: '7px' }} />
      <Input placeholder='Поиск' value={inputValue} onChange={onChange} />
      {inputValue && (
        <InputIcon src='/close-icon.png' alt='close' onClick={onClose} style={{ right: '7px', cursor: 'pointer' }} />
      )}
    </SearchInputWrapper>
  )
}
