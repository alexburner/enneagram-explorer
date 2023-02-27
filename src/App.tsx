import { FC } from 'react'
import { Nav } from './components/Nav'
import { Selected } from './components/Selected'

export const App: FC = () => (
  <div className="mx-auto p-5" style={{ maxWidth: '1600px' }}>
    <div className="pb-5">
      <Nav />
    </div>
    <div className="pt-5">
      <Selected />
    </div>
  </div>
)
