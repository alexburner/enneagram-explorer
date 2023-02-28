import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data/types'

export const TypeSummary: FC<{ num: number }> = ({ num }) => {
  const type = types[num - 1]
  if (!type) throw new Error('Unreachable')
  const [currNum, setCurrNum] = useAtom(currNumAtom)
  const isCurrent = type.num === currNum
  return (
    <div className="content">
      {isCurrent ? (
        <h2 style={{ color: 'inherit' }}>
          {type.num} — The {type.name}
        </h2>
      ) : (
        <h3
          style={{ color: 'inherit' }}
          className="is-clickable"
          onClick={() => setCurrNum(type.num)}
        >
          {type.num} — The {type.name}
        </h3>
      )}
      <p>
        <strong>The {type.summary.subtitle1} Type</strong>
        <br />
        <em>{type.summary.subtitle2}</em>
        <br />
      </p>
      <div>{type.summary.description}</div>
      <ul>
        <li>
          <strong>Fear: </strong>
          {type.summary.fear}.
        </li>
        <li>
          <strong>Desire: </strong>
          {type.summary.desire}.
        </li>
        <li>
          <strong>Problems with: </strong>
          {type.summary.problems}
        </li>
        <li>
          <strong>At their best: </strong>
          {type.summary.best}
        </li>
        <li>
          <strong>Key Motivation: </strong>
          {type.summary.motivation}
        </li>
      </ul>
    </div>
  )
}
