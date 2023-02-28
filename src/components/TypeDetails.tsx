import { FC } from 'react'
import { types } from '../data/types'

export const TypeDetails: FC<{ num: number }> = ({ num }) => {
  const type = types[num - 1]
  if (!type) throw new Error('Unreachable')
  return (
    <div className="content is-normal">
      <h4>Overview</h4>
      <div
        className="pb-5"
        dangerouslySetInnerHTML={{ __html: type.detail.overviewHtml }}
      />
      <h4>Recommendations</h4>
      <ul>
        {type.detail.recommendations.map((recommendation) => (
          <li key={recommendation}>{recommendation}</li>
        ))}
      </ul>
    </div>
  )
}
