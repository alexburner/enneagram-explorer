import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data/types'
import { TypeDetails } from './TypeDetails'
import { TypeMisidentities } from './TypeMisidentities'
import { TypeRelationships } from './TypeRelationships'
import { TypeSummary } from './TypeSummary'

export const Current: FC = () => {
  const [currNum] = useAtom(currNumAtom)
  const type = types[currNum - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <div className="columns is-variable is-2">
      <div className="column">
        <div className="pb-4" />
        <div className="message is-info">
          <div className="message-header is-justify-content-center">
            Wing {type.relations.wingL.num}
          </div>
          <div className="message-body pb-6">
            <div className="message-body is-radiusless py-1 px-4 mb-4">
              {type.relations.wingL.description}
            </div>
            <TypeSummary num={type.relations.wingL.num} />
          </div>
        </div>
        <div className="message is-danger">
          <div className="message-header is-justify-content-center">
            Stress → {type.relations.stress.num}
          </div>
          <div className="message-body pb-6">
            <div className="message-body is-radiusless py-1 px-4 mb-4">
              Moving in their Direction of Disintegration →{' '}
              {type.relations.stress.description}.
            </div>
            <TypeSummary num={type.relations.stress.num} />
          </div>
        </div>
        <div className="message">
          <div className="message-header is-justify-content-center">
            Mistypings for {type.num}
          </div>
          <div className="pt-0 px-5 pb-6">
            <TypeMisidentities num={type.num} />
          </div>
        </div>
      </div>
      <div className="column is-two-fifths">
        <div className="message is-dark">
          <div className="message-header is-justify-content-center">
            Type {type.num}
          </div>
          <div className="message-body pb-6">
            <div className="p-2">
              <TypeSummary num={type.num} />
              <div className="pb-3" />
              <TypeDetails num={type.num} />
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div className="pb-4" />
        <div className="message is-info">
          <div className="message-header is-justify-content-center">
            Wing {type.relations.wingR.num}
          </div>
          <div className="message-body pb-6">
            <div className="message-body is-radiusless py-1 px-4 mb-4">
              {type.relations.wingR.description}
            </div>
            <TypeSummary num={type.relations.wingR.num} />
          </div>
        </div>
        <div className="message is-success">
          <div className="message-header is-justify-content-center">
            Growth → {type.relations.growth.num}
          </div>
          <div className="message-body pb-6">
            <div className="message-body is-radiusless py-1 px-4 mb-4">
              Moving in their Direction of Integration →{' '}
              {type.relations.growth.description}.
            </div>
            <TypeSummary num={type.relations.growth.num} />
          </div>
        </div>
        <div className="message">
          <div className="message-header is-justify-content-center">
            Relationships with {type.num}
          </div>
          <div className="pt-0 px-5 pb-6">
            <TypeRelationships num={type.num} />
          </div>
        </div>
      </div>
    </div>
  )
}
