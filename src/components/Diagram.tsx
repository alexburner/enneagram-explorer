import { useAtom } from 'jotai'
import { FC } from 'react'
import { currNumAtom } from '../atoms'
import { types } from '../data/types'
import { createDiagramLines, createDiagramPoints } from '../util/geometry'

const WIDTH = 500
const HEIGHT = 320
const RADIUS = 90

const CENTER_X = WIDTH / 2
const CENTER_Y = HEIGHT / 2

const STROKE_WIDTH = 6
const FONT_SIZE = 16

const COLOR_INERT = '#DDD'
const COLOR_INERT_TEXT = '#AAA'
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
    <div style={{ position: 'relative', height: `${HEIGHT}px` }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={WIDTH}
        height={HEIGHT}
        style={{
          display: 'block',
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
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
        {[growthNum, stressNum].map((num) => {
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
                  ? STROKE_WIDTH * 0.5
                  : STROKE_WIDTH * 1.0
              }
              fill={color}
            />
          )
        })}
        {types.map((type) => {
          const point = POINTS[type.num - 1]
          if (!point) throw new Error('Unreachable')

          const fontShift = FONT_SIZE * 1.2
          let x = point.x
          let y = point.y
          let anchor = 'start'
          switch (type.name) {
            case 'Reformer': {
              x += fontShift * 0.75
              y -= fontShift * 0.15
              break
            }
            case 'Helper': {
              x += fontShift * 0.8
              y += fontShift * 0.2
              break
            }
            case 'Achiever': {
              x += fontShift * 0.9
              y += fontShift * 0.4
              break
            }
            case 'Individualist': {
              x += fontShift * 0.0
              y += fontShift * 1.45
              break
            }
            case 'Investigator': {
              x -= fontShift * 0.0
              y += fontShift * 1.45
              anchor = 'end'
              break
            }
            case 'Loyalist': {
              x -= fontShift * 0.9
              y += fontShift * 0.4
              anchor = 'end'
              break
            }
            case 'Enthusiast': {
              x -= fontShift * 0.8
              y += fontShift * 0.2
              anchor = 'end'
              break
            }
            case 'Challenger': {
              x -= fontShift * 0.75
              y -= fontShift * 0.15
              anchor = 'end'
              break
            }
            case 'Peacemaker': {
              y -= fontShift * 1.1
              anchor = 'middle'
              break
            }
          }

          let color = COLOR_INERT_TEXT
          let fontSize = FONT_SIZE
          let fontWeight = 'normal'
          switch (type.num) {
            case currNum: {
              color = COLOR_ACTIVE
              fontSize = FONT_SIZE * 1.25
              y += 1 // for larger font
              fontWeight = 'bold'
              break
            }
            case wingLNum: {
              color = COLOR_WING
              fontSize = FONT_SIZE * 1.05
              fontWeight = 'bold'
              break
            }
            case wingRNum: {
              color = COLOR_WING
              fontSize = FONT_SIZE * 1.05
              fontWeight = 'bold'
              break
            }
            case stressNum: {
              color = COLOR_STRESS
              fontSize = FONT_SIZE * 1.05
              fontWeight = 'bold'
              break
            }
            case growthNum: {
              color = COLOR_GROWTH
              fontSize = FONT_SIZE * 1.05
              fontWeight = 'bold'
              break
            }
          }

          return (
            <text
              key={type.name}
              x={x}
              y={y}
              textAnchor={anchor}
              fill={color}
              style={{
                fontSize: `${fontSize}px`,
                fontWeight,
                userSelect: 'none',
                cursor: 'pointer',
              }}
              onClick={() => setCurrNum(type.num)}
            >
              {type.num < 5
                ? `${type.num} ${type.name}`
                : `${type.name} ${type.num}`}
            </text>
          )
        })}
      </svg>
    </div>
  )
}
