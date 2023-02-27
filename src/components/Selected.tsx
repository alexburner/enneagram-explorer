import { useAtomValue, useSetAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data'

export const Selected: FC = () => {
  const currNum = useAtomValue(currNumAtom)
  if (!currNum) return null
  const type = types[currNum - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%' }}>
        <TypeCard num={type.relations.wingL.num} />
        <TypeCard num={type.relations.stress.num} />
      </div>
      <div style={{ width: '40%' }}>
        <TypeCard num={type.num} />
      </div>
      <div style={{ width: '30%' }}>
        <TypeCard num={type.relations.wingR.num} />
        <TypeCard num={type.relations.growth.num} />
      </div>
    </div>
  )
}

const TypeCard: FC<{ num: number }> = ({ num }) => {
  const type = types[num - 1]
  if (!type) throw new Error('Unreachable')
  const setCurrNum = useSetAtom(currNumAtom)
  return (
    <div>
      <h3 onClick={() => setCurrNum(type.num)} style={{ cursor: 'pointer' }}>
        {type.num} — {type.name}
      </h3>
      <h5>
        {type.summary.subtitle1}: {type.summary.subtitle2}
      </h5>
      <p>{type.summary.description}</p>
    </div>
  )
}
