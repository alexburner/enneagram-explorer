import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data'

export const Nav: FC = () => {
  const [currNum, setCurrNum] = useAtom(currNumAtom)
  return (
    <div style={{ textAlign: 'center' }}>
      {types.map((type) => (
        <span
          key={type.name}
          style={{
            margin: '0 6px',
            background: type.num === currNum ? 'yellow' : 'none',
            cursor: 'pointer',
          }}
          onClick={() => setCurrNum(type.num)}
        >
          {type.num} — {type.name}
        </span>
      ))}
    </div>
  )
}
