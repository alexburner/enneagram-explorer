import { FC } from 'react'
import { types } from '../data'

export const Selected: FC<{
  chosenNum: number | undefined
  chooseNum: (num: number) => void
}> = ({ chosenNum, chooseNum }) => {
  if (!chosenNum) return null
  const type = types[chosenNum - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <div style={{ display: 'flex' }}>
      <div style={{ width: '30%' }}>
        <TypeCard num={type.relations.wingL.num} chooseNum={chooseNum} />
        <TypeCard num={type.relations.stress.num} chooseNum={chooseNum} />
      </div>
      <div style={{ width: '40%' }}>
        <TypeCard num={type.num} chooseNum={chooseNum} />
      </div>
      <div style={{ width: '30%' }}>
        <TypeCard num={type.relations.wingR.num} chooseNum={chooseNum} />
        <TypeCard num={type.relations.growth.num} chooseNum={chooseNum} />
      </div>
    </div>
  )
}

const TypeCard: FC<{ num: number; chooseNum: (num: number) => void }> = ({
  num,
  chooseNum,
}) => {
  const type = types[num - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <div>
      <h3 onClick={() => chooseNum(type.num)} style={{ cursor: 'pointer' }}>
        {type.num} — {type.name}
      </h3>
      <h5>
        {type.summary.subtitle1}: {type.summary.subtitle2}
      </h5>
      <p>{type.summary.description}</p>
    </div>
  )
}
