import React from 'react'
import { useSpring, animated } from 'react-spring'
import range from 'lodash-es/range'
import EduData from './EduData';

const items = range(0)
const interp = i => r => `translate3d(0, ${15 * Math.sin(r + (i * 2 * Math.PI) / 1.6)}px, 0)`

export default function EducationExp() {

  const data = EduData.map( (edu, index) => (edu.center2)? (
    <div className="eduexp" key={index}>
      <div className="eduExpName">{edu.name}</div>
    <label htmlFor="EduCenter" className="center">{edu.center}</label><br/>
    <label htmlFor="EduDis" className="description">{edu.description}</label><br/><br/>
    <label htmlFor="EduCenter" className="center">{edu.center1}</label><br/>
    <label htmlFor="EduDis" className="description">{edu.description1}</label>
    </div>
  ):(
    <div className="eduexp" key={index}>
      <div className="eduExpName">{edu.name}</div>
    <label htmlFor="EduCenter" className="center">{edu.center}</label><br/>
    <label htmlFor="EduDis" className="description">{edu.description}</label>   
    </div> 
   ) )

   const itemsData = items.concat(data);

  const { radians } = useSpring({
    to: async next => {
      while (1) await next({ radians: 2 * Math.PI })
    },
    from: { radians: 0 },
    config: { duration: 3500 },
    reset: true,
  })
  return itemsData.map((data,i) => <animated.div key={i} className="script-bf-box" style={{ transform: radians.interpolate(interp(i)) }} >
    <label htmlFor="edudata">{data}</label>       
  </animated.div>)
}


