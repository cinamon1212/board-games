import styled from 'styled-components'

export const GamesListWrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr); // По умолчанию 1 колонка (для мобильных)
  gap: 64px;
  list-style: none;
  width: 100%;

  @media (min-width: 700px) {
    // Для планшетов и выше
    grid-template-columns: repeat(2, 1fr); // 2 колонки
  }

  @media (min-width: 1100px) {
    // Для десктопов
    grid-template-columns: repeat(3, 1fr); // 4 колонки (как у вас было изначально)
  }
`
