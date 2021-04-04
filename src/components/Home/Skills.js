import React, { useState, useEffect } from 'react'
import { useTransition, animated } from 'react-spring'
import shuffle from 'lodash/shuffle'
import './Skills.css'
const Skills = ({data})=> {
  const [rows, set] = useState(data);  
  useEffect(() => void setInterval(() => set(shuffle), 5000), [])

  let height = 0
  const transitions = useTransition(
    rows.map(data => ({ ...data, y: (height += data.height) - data.height })),
    d => d.name,
    {
      from: { height: 0, opacity: 0 },
      leave: { height: 0, opacity: 0 },
      enter: ({ y, height }) => ({ y, height, opacity: 1 }),
      update: ({ y, height }) => ({ y, height })
    }
  )

  return (
    <div className="list" style={{ height }}>
      {transitions.map(({ item, props: { y, ...rest }, key }, index) => (
              
        <animated.div
          key={key}
          className="cardList"
          style={{ zIndex: data.length - index, transform: y.interpolate(y => `translate3d(0,${y}px,0)`), ...rest }}>
          <div className="cell">
            <div className="details" style={{ backgroundImage: item.css }} >{item.name}</div> 
            </div>         
        </animated.div>
        )
      )}
    </div>
  )
}

export default Skills;
