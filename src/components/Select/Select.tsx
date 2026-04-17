'use client'

import ReactSelect, { StylesConfig, SingleValue } from 'react-select'

export type Option = {
  value: string
  label: string
}

type AppSelectProps = {
  value: string
  onChange: (value: string) => void
  options: Option[]
  placeholder?: string
  isDisabled?: boolean
}

const customStyles: StylesConfig<Option, false> = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderColor: state.isFocused
      ? 'rgba(242, 153, 74, 0.8)'
      : 'rgba(255, 255, 255, 0.08)',
    borderRadius: '18px',
    padding: '6px 4px',
    boxShadow: 'none',
    minHeight: '48px',
    cursor: 'pointer',

    '&:hover': {
      borderColor: 'rgba(242, 153, 74, 0.6)',
    },
  }),

  menu: (base) => ({
    ...base,
    marginTop: '8px',
    backgroundColor: '#13100C',
    borderRadius: '16px',
    overflow: 'hidden',
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isFocused ? '#F2994A14' : 'transparent',
    color: '#fff6eb',
    cursor: 'pointer',
  }),

  singleValue: (base) => ({
    ...base,
    color: '#fff6eb',
  }),

  placeholder: (base) => ({
    ...base,
    color: '#aaa',
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: '#fff6eb',
    '&:hover': {
      color: '#F2994A',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),

  menuPortal: (base) => ({
    ...base,
    zIndex: 9999,
  }),
  menuList: (base) => ({
    ...base,
    maxHeight: '200px',
    overflowY: 'auto',

    scrollbarWidth: 'none', // Firefox
    msOverflowStyle: 'none', // IE

    '::-webkit-scrollbar': {
      display: 'none', // Chrome/Safari
    },
  }),
}

export const Select = ({
  value,
  onChange,
  options,
  placeholder = 'Выберите...',
  isDisabled,
}: AppSelectProps) => {
  const selected = options.find((o) => o.value === value) || null

  const handleChange = (option: SingleValue<Option>) => {
    onChange(option?.value ?? '')
  }

  return (
    <ReactSelect<Option, false>
      value={selected}
      onChange={handleChange}
      options={options}
      placeholder={placeholder}
      isDisabled={isDisabled}
      styles={customStyles}
      menuPortalTarget={document.body}
      isSearchable={false}
    />
  )
}
