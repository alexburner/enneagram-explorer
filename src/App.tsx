import { FC } from 'react'
import { Current } from './components/Current'
import { Diagram } from './components/Diagram'

export const App: FC = () => (
  <div className="mx-auto px-5 pb-6" style={{ maxWidth: '2000px' }}>
    <div className="pt-1" style={{ overflow: 'auto' }}>
      <Diagram />
    </div>
    <div className="pb-6">
      <Current />
    </div>
  </div>
)
