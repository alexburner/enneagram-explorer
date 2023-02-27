import classNames from 'classnames'
import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data'

export const Selected: FC = () => {
  const [currNum] = useAtom(currNumAtom)
  if (!currNum) return null
  const type = types[currNum - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <div className="columns">
      <div className="column">
        <div className="pt-3" />
        <div className="message is-info">
          <div className="message-header is-justify-content-center">
            Wing {type.relations.wingL.num} — {type.relations.wingL.description}
          </div>
          <TypeCard num={type.relations.wingL.num} />
        </div>
        <div className="message is-danger">
          <div className="message-header is-justify-content-center">
            Stress {type.relations.stress.num}
          </div>
          <div className="message-body pb-0">
            Moving in their Direction of Disintegration,{' '}
            {type.relations.stress.description}.
          </div>
          <TypeCard num={type.relations.stress.num} />
        </div>
      </div>
      <div className="column is-two-fifths">
        <div className="message is-dark is-medium">
          <div className="message-header is-justify-content-center">
            Type {type.num}
          </div>
          <TypeCard num={type.num} />
        </div>
      </div>
      <div className="column">
        <div className="pt-3" />
        <div className="message is-info">
          <div className="message-header is-justify-content-center">
            Wing {type.relations.wingR.num} — {type.relations.wingR.description}
          </div>
          <TypeCard num={type.relations.wingR.num} />
        </div>
        <div className="message is-success">
          <div className="message-header is-justify-content-center">
            Growth {type.relations.growth.num}
          </div>
          <div className="message-body pb-0">
            Moving in their Direction of Integration,{' '}
            {type.relations.growth.description}.
          </div>
          <TypeCard num={type.relations.growth.num} />
        </div>
      </div>
    </div>
  )
}

const TypeCard: FC<{ num: number }> = ({ num }) => {
  const type = types[num - 1]
  if (!type) throw new Error('Unreachable')
  const [currNum, setCurrNum] = useAtom(currNumAtom)
  return (
    <div className="p-5">
      <h3
        className={classNames('title is-5', {
          'is-clickable': type.num !== currNum,
        })}
        onClick={() => setCurrNum(type.num)}
      >
        {type.name}
      </h3>
      <h5 className="title is-6">{type.summary.subtitle1}</h5>
      <h5 className="subtitle is-6">{type.summary.subtitle2}</h5>
      <p>{type.summary.description}</p>
    </div>
  )
}
