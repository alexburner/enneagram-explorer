import classNames from 'classnames'
import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data/types'

export const Tabs: FC = () => {
  const [currNum, setCurrNum] = useAtom(currNumAtom)
  return (
    <div className="tabs is-centered">
      <ul>
        {types.map((type) => {
          const isActive = type.num === currNum
          return (
            <li
              key={type.name}
              className={classNames({
                'is-active': isActive,
                'has-text-weight-bold': isActive,
              })}
              onClick={() => setCurrNum(type.num)}
            >
              <a className="has-text-dark">
                {type.num}: {type.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
