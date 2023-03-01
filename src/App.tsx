import { FC } from 'react'
import { Content } from './components/Content'
import { Diagram } from './components/Diagram'

export const App: FC = () => (
  <div className="mx-auto pt-1 px-5 pb-6" style={{ maxWidth: '2000px' }}>
    <div className="pb-6">
      <Diagram />
      <Content />
    </div>
  </div>
)
