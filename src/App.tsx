import { FC } from 'react'
import { Nav } from './components/Nav'
import { Selected } from './components/Selected'

export const App: FC = () => (
  <div className="mx-auto pt-4 px-5 pb-6" style={{ maxWidth: '1600px' }}>
    <div className="pb-4">
      <Nav />
    </div>
    <div className="pt-4 pb-6">
      <Selected />
    </div>
  </div>
)
