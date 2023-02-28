import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data/types'
import { createDiagramLines, createDiagramPoints } from '../util/geometry'

const WIDTH = 360
const HEIGHT = 200
const RADIUS = 80

const CENTER_X = WIDTH / 2
const CENTER_Y = HEIGHT / 2

const STROKE_WIDTH = 6

const COLOR_INERT = '#DDD'
const COLOR_ACTIVE = '#363636'
const COLOR_WING = '#3e8ed0'
const COLOR_STRESS = '#f14668'
const COLOR_GROWTH = '#48c78e'

const POINTS = createDiagramPoints({ x: CENTER_X, y: CENTER_Y }, RADIUS)
const LINES = createDiagramLines(POINTS)

export const Diagram: FC = () => {
  const [currNum, setCurrNum] = useAtom(currNumAtom)
  const currType = types[currNum - 1]
  if (!currType) throw new Error('Unreachable')
  const wingLNum = currType.relations.wingL.num
  const wingRNum = currType.relations.wingR.num
  const stressNum = currType.relations.stress.num
  const growthNum = currType.relations.growth.num
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={WIDTH}
        height={HEIGHT}
        style={{
          display: 'block',
          margin: 'auto',
        }}
      >
        <circle
          cx={CENTER_X}
          cy={CENTER_Y}
          r={RADIUS}
          stroke={COLOR_INERT}
          strokeWidth={STROKE_WIDTH}
          fill="transparent"
        />
        {LINES.map((line) => (
          <line
            key={`${line.from.x},${line.from.y},${line.to.x},${line.to.y}`}
            x1={line.from.x}
            x2={line.to.x}
            y1={line.from.y}
            y2={line.to.y}
            stroke={COLOR_INERT}
            strokeWidth={STROKE_WIDTH}
          />
        ))}
        {[wingLNum, wingRNum].map((num, i) => {
          const from = POINTS[currNum - 1]
          const to = POINTS[num - 1]
          if (!from || !to) throw new Error('Unreachable')
          return (
            <path
              key={`${from.x},${from.y},${to.x},${to.y}`}
              d={`M ${from.x} ${from.y} A ${RADIUS} ${RADIUS} 0 0 ${
                i === 0 ? 0 : 1
              } ${to.x} ${to.y}`}
              stroke={COLOR_WING}
              strokeWidth={STROKE_WIDTH}
              fill="transparent"
            />
          )
        })}
        {[stressNum, growthNum].map((num) => {
          const from = POINTS[currNum - 1]
          const to = POINTS[num - 1]
          if (!from || !to) throw new Error('Unreachable')
          return (
            <line
              key={`${from.x},${from.y},${to.x},${to.y}`}
              x1={from.x}
              x2={to.x}
              y1={from.y}
              y2={to.y}
              stroke={num === growthNum ? COLOR_GROWTH : COLOR_STRESS}
              strokeWidth={STROKE_WIDTH}
            />
          )
        })}
        {POINTS.map((point, i) => {
          const num = i + 1
          const isActive = num === currNum
          const color = isActive
            ? COLOR_ACTIVE
            : num === wingLNum
            ? COLOR_WING
            : num === wingRNum
            ? COLOR_WING
            : num === stressNum
            ? COLOR_STRESS
            : num === growthNum
            ? COLOR_GROWTH
            : COLOR_INERT
          return (
            <circle
              key={`${point.x},${point.y}`}
              cx={point.x}
              cy={point.y}
              r={
                isActive
                  ? STROKE_WIDTH * 1.25
                  : color === COLOR_INERT
                  ? STROKE_WIDTH / 2
                  : STROKE_WIDTH
              }
              fill={color}
              onClick={() => setCurrNum(num)}
              style={{ cursor: isActive ? 'default' : 'pointer' }}
            />
          )
        })}
      </svg>
    </div>
  )
}
