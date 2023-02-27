import { FC } from 'react'
import { types } from '../data'

export const Nav: FC<{
  chosenNum: number | undefined
  chooseNum: (num: number) => void
}> = ({ chosenNum, chooseNum }) => {
  return (
    <div style={{ textAlign: 'center' }}>
      {types.map((type) => (
        <span
          key={type.name}
          style={{
            margin: '0 6px',
            background: chosenNum === type.num ? 'yellow' : 'none',
            cursor: 'pointer',
          }}
          onClick={() => chooseNum(type.num)}
        >
          {type.num} — {type.name}
        </span>
      ))}
    </div>
  )
}
