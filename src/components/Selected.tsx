import classNames from 'classnames'
import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data'

export const Selected: FC = () => {
  const [currNum] = useAtom(currNumAtom)
  const type = types[currNum - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <div className="columns is-variable is-2">
      <div className="column">
        <div className="pt-3" />
        <div className="message is-info">
          <div className="message-header is-justify-content-center">Wing</div>
          <MessageBody
            text={`${type.num}w${type.relations.wingL.num}:  The ${type.relations.wingL.description}`}
          />
          <TypeCard num={type.relations.wingL.num} />
        </div>
        <div className="message is-danger">
          <div className="message-header is-justify-content-center">Stress</div>
          <MessageBody
            text={`Moving in their Direction of Disintegration — ${type.relations.stress.description}.`}
          />
          <TypeCard num={type.relations.stress.num} />
        </div>
      </div>
      <div className="column is-two-fifths">
        <div className="message is-dark is-medium">
          <div className="message-header is-justify-content-center">Type</div>
          <div className="p-2">
            <TypeCard num={type.num} />
          </div>
        </div>
      </div>
      <div className="column">
        <div className="pt-3" />
        <div className="message is-info">
          <div className="message-header is-justify-content-center">Wing</div>
          <MessageBody
            text={`${type.num}w${type.relations.wingR.num}:  The ${type.relations.wingR.description}`}
          />
          <TypeCard num={type.relations.wingR.num} />
        </div>
        <div className="message is-success">
          <div className="message-header is-justify-content-center">Growth</div>
          <MessageBody
            text={`Moving in their Direction of Integration — ${type.relations.growth.description}.`}
          />
          <TypeCard num={type.relations.growth.num} />
        </div>
      </div>
    </div>
  )
}

const MessageBody: FC<{ text: string }> = ({ text }) => (
  <div className="message-body pb-0">
    <div
      className="pl-3 ml-1"
      style={{
        borderColor: 'inherit',
        borderLeftStyle: 'solid',
        borderLeftWidth: '0.2rem',
        opacity: 0.85,
      }}
    >
      {text}
    </div>
  </div>
)

const TypeCard: FC<{ num: number }> = ({ num }) => {
  const type = types[num - 1]
  if (!type) throw new Error('Unreachable')
  const [currNum, setCurrNum] = useAtom(currNumAtom)
  return (
    <div className="p-5 pb-6 content">
      <h3
        className={classNames({
          'is-clickable': type.num !== currNum,
        })}
        onClick={() => setCurrNum(type.num)}
      >
        {type.num}: The {type.name}
      </h3>
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
          <strong>At their best: </strong>
          {type.summary.best}
        </li>
        <li>
          <strong>Problems with: </strong>
          {type.summary.problems}
        </li>
        <li>
          <strong>Key Motivation: </strong>
          {type.summary.motivation}
        </li>
      </ul>
    </div>
  )
}
