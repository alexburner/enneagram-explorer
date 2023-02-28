import { FC } from 'react'
import { Current } from './components/Current'
import { Diagram } from './components/Diagram'
import { Tabs } from './components/Tabs'

export const App: FC = () => (
  <div className="mx-auto pt-1 px-5 pb-6" style={{ maxWidth: '2000px' }}>
    <Diagram />
    <div className="pb-4">
      <Tabs />
    </div>
    <div className="pb-6">
      <Current />
    </div>
  </div>
)
