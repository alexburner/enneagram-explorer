import { FC, useState } from 'react'
import { Nav } from './components/Nav'
import { Selected } from './components/Selected'

export const App: FC = () => {
  const [chosenNum, chooseNum] = useState<number>()
  return (
    <div>
      <Nav chosenNum={chosenNum} chooseNum={chooseNum} />
      <Selected chosenNum={chosenNum} chooseNum={chooseNum} />
    </div>
  )
}
