import classNames from 'classnames'
import { FC, useEffect, useMemo, useState } from 'react'
import { relationships } from '../data/relationships'
import { types } from '../data/types'
import { isKeyOf } from '../util/ts'

const otherNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const TypeRelationships: FC<{ num: number }> = ({ num }) => {
  const [activeNum, setActiveNum] = useState(1)
  useEffect(() => setActiveNum(1), [num])

  const relationship = useMemo(() => {
    const min = Math.min(num, activeNum)
    const max = Math.max(num, activeNum)
    const key = `${min},${max}`
    return isKeyOf(key, relationships)
      ? relationships[key]
      : { brings: `Bad key "${key}"`, trouble: `Bad key "${key}"` }
  }, [num, activeNum])

  const type = types[num - 1]
  const otherType = types[activeNum - 1]
  if (!type || !otherType) throw new Error('Unreachable')

  return (
    <div>
      <div className="tabs is-centered">
        <ul>
          {otherNums.map((otherNum) => {
            const isActive = activeNum === otherNum
            return (
              <li
                key={otherNum}
                className={classNames({
                  'is-active': isActive,
                  'has-text-weight-bold': isActive,
                })}
                onClick={() => setActiveNum(otherNum)}
              >
                <a style={{ textDecoration: 'none' }}>{otherNum}</a>
              </li>
            )
          })}
        </ul>
      </div>
      <div className="content">
        <h4 className="has-text-centered">
          The {type.name} & The {otherType.name}
        </h4>
        <h6 className="pt-4">What each brings to the relationship</h6>
        <div dangerouslySetInnerHTML={{ __html: relationship.brings }} />
        <h6 className="pt-5">Potential trouble spots or issues</h6>
        <div dangerouslySetInnerHTML={{ __html: relationship.trouble }} />
      </div>
    </div>
  )
}
