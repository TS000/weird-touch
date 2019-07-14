import React, { useState } from 'react'
import { useSprings, animated, interpolate } from 'react-spring'
import { useGesture } from 'react-use-gesture'

const cards = [
  'https://i.imgur.com/9yILi61.png',
  'https://i.imgur.com/JivsfJLg.jpg',
  'https://i.imgur.com/y9eauo8.jpg',
  'https://static1.squarespace.com/static/540070dde4b03b03241cae57/t/546e197de4b03c6f696f92b2/1416501656898/Photo__Large_red_square_by_TheLastDanishPastry.png',
  'https://i.imgur.com/0LNiVAV.png',
  'https://re-mm-assets.s3.amazonaws.com/product_photo/22868/large_Poly_HotPink_pms226up_1471502442.jpg'
]

const to = i => ({ x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100 })
const from = i => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })

const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set())
  const [props, set] = useSprings(cards.length, i => ({ ...to(i), from: from(i) }))

  const bind = useGesture(({ args: [index], down, delta: [xDelta], distance, direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2
    const dir = xDir < 0 ? -1 : 1
    if (!down && trigger) gone.add(index)
    set(i => {
      if (index !== i) return
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? xDelta : 0
      const rot = xDelta / 100 + (isGone ? dir * 10 * velocity : 0)
      const scale = down ? 1.1 : 1
      return { x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 } }
    })
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set(i => to(i)), 600)
  })

  return props.map(({ x, y, rot, scale }, i) => (
    <animated.div key={i} style={{ transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`) }}>
      <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans), backgroundImage: `url(${cards[i]})` }} />
    </animated.div>
  ))
}

export default Deck();