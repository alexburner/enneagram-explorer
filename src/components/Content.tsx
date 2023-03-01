import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { Type, types } from '../data/types'
import { TypeDetails } from './TypeDetails'
import { TypeMisidentities } from './TypeMisidentities'
import { TypeRelationships } from './TypeRelationships'
import { TypeSummary } from './TypeSummary'

export const Content: FC = () => {
  const [currNum] = useAtom(currNumAtom)
  const type = types[currNum - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <>
      {/* Desktop view */}
      <div className="columns is-desktop is-variable is-2 is-hidden-touch">
        <div className="column">
          <div className="pb-4" />
          <WingL type={type} />
          <Stress type={type} />
          <Mistypings type={type} />
        </div>
        <div className="column is-two-fifths">
          <Current type={type} />
        </div>
        <div className="column">
          <div className="pb-4" />
          <WingR type={type} />
          <Growth type={type} />
          <Relationships type={type} />
        </div>
      </div>
      {/* Mobile view */}
      <div className="is-hidden-desktop">
        <Current type={type} />
        <WingL type={type} />
        <WingR type={type} />
        <Stress type={type} />
        <Growth type={type} />
        <Mistypings type={type} />
        <Relationships type={type} />
      </div>
    </>
  )
}

const Current: FC<{ type: Type }> = ({ type }) => (
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
)

const WingL: FC<{ type: Type }> = ({ type }) => (
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
)

const WingR: FC<{ type: Type }> = ({ type }) => (
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
)

const Stress: FC<{ type: Type }> = ({ type }) => (
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
)

const Growth: FC<{ type: Type }> = ({ type }) => (
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
)

const Mistypings: FC<{ type: Type }> = ({ type }) => (
  <div className="message">
    <div className="message-header is-justify-content-center">
      Mistypings for {type.num}
    </div>
    <div className="pt-0 px-5 pb-6">
      <TypeMisidentities num={type.num} />
    </div>
  </div>
)

const Relationships: FC<{ type: Type }> = ({ type }) => (
  <div className="message">
    <div className="message-header is-justify-content-center">
      Relationships with {type.num}
    </div>
    <div className="pt-0 px-5 pb-6">
      <TypeRelationships num={type.num} />
    </div>
  </div>
)
