import { FC } from 'react'
import { types } from './data'

export const App: FC = () => {
  return (
    <div>
      {types.map((type) => (
        <pre key={type.num}>{JSON.stringify(type.summary, null, 2)}</pre>
      ))}
    </div>
  )
}
