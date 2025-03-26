import { ChangeEventHandler } from 'react'
import { CloseIcon, Input, SearchIcon, SearchInputWrapper } from './styles'

type SearchInputProps = {
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  inputValue: string
}

export const SearchInput = ({ setInputValue, inputValue }: SearchInputProps) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setInputValue(e.target.value)

  const onClose = () => setInputValue('')

  return (
    <SearchInputWrapper>
      <SearchIcon src='search-icon.png' />
      <Input placeholder='Поиск' value={inputValue} onChange={onChange} />
      <CloseIcon src='close-icon.png' onClick={onClose} />
    </SearchInputWrapper>
  )
}
