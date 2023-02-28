import { types } from '../data/types'

interface Point {
  x: number
  y: number
}

interface Line {
  from: Point
  to: Point
}

const pointAlongCircle = (args: {
  center: Point
  radius: number
  angle: number
}): Point => {
  const radians = args.angle * (Math.PI / 180)
  const x = args.center.x + args.radius * Math.cos(radians)
  const y = args.center.y + args.radius * Math.sin(radians)
  return { x, y }
}

export const createDiagramPoints = (center: Point, radius: number): Point[] => {
  const ANGLE_SIZE = 360 / 9
  const INIT_ANGLE = -90 + ANGLE_SIZE
  return new Array(9).fill(null).map((_, i) => {
    const angle = INIT_ANGLE + ANGLE_SIZE * i
    return pointAlongCircle({
      center,
      radius,
      angle,
    })
  })
}

export const createDiagramLines = (diagramPoints: Point[]) => {
  const lines: Line[] = []
  types.forEach((type) => {
    const iSelf = type.num - 1
    const iStress = type.relations.stress.num - 1
    const iGrowth = type.relations.growth.num - 1
    const from = diagramPoints[iSelf]
    if (!from) throw new Error('Unreachable')
    const tos = [diagramPoints[iStress], diagramPoints[iGrowth]]
    tos.forEach((to) => {
      if (!to) throw new Error('Unreachable')
      lines.push({ from, to })
    })
  })
  return lines
}
