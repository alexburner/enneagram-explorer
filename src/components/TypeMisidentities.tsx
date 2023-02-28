import classNames from 'classnames'
import { FC, useEffect, useMemo, useState } from 'react'
import { misidentities } from '../data/misidentities'
import { types } from '../data/types'
import { isKeyOf } from '../util/ts'

const allNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const TypeMisidentities: FC<{ num: number }> = ({ num }) => {
  const otherNums = useMemo(
    () => allNums.filter((otherNum) => otherNum !== num),
    [num],
  )

  const [activeNum, setActiveNum] = useState(otherNums[0] ?? 0)
  useEffect(() => setActiveNum(otherNums[0] ?? 0), [otherNums])

  const misidentity = useMemo(() => {
    const min = Math.min(num, activeNum)
    const max = Math.max(num, activeNum)
    const key = `${min},${max}`
    return isKeyOf(key, misidentities) ? misidentities[key] : `Bad key "${key}"`
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
      </div>
      <div
        className="content"
        dangerouslySetInnerHTML={{ __html: misidentity }}
      />
    </div>
  )
}
