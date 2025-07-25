import { useInView } from 'react-intersection-observer'

import { SearchInput } from '../SearchInput'

import { AnimatedHeader, HeaderWrapper, Title } from './style'

type HeaderProps = {
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
}

export const Header = ({ inputValue, setInputValue }: HeaderProps) => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.1 })
  return (
    <AnimatedHeader ref={ref} $isVisible={inView}>
      <HeaderWrapper>
        <Title>Найдите нужную игру</Title>
        <SearchInput inputValue={inputValue} setInputValue={setInputValue} />
      </HeaderWrapper>
    </AnimatedHeader>
  )
}
