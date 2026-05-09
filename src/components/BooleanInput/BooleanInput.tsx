'use client'

import { Player } from '@/types'

type BooleanInputProps = {
  name: string
  value: Player | ''
  checked: boolean
  onChange: (value: Player) => void
  disabled?: boolean
}

export const BooleanInput = ({
  name,
  value,
  checked,
  onChange,
  disabled,
}: BooleanInputProps) => {
  return (
    <input
      type='radio'
      name={name}
      value={value}
      checked={checked}
      onChange={(e) => onChange(e.target.value as Player)}
      disabled={disabled}
      style={{
        marginTop: '15px',
        width: '20px',
        height: '20px',
        accentColor: '#F2994A',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    />
  )
}
