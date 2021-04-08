import React, { useState } from "react";
import { useSpring, animated as a } from "react-spring";
import AboutDoc from "./AboutDoc";
import "./Documents.css";
import DownlDoc from "./DownlDoc";

function Documents() {
  const [flipped, set] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });
  //   const shoot = ()=>{
  //       set(state => false);

  //   }
  const docflip = () => set((state) => state);
  const flip = () => {
    set((state) => !state);
  };

  return (
    <div className="Documents">
      <div className="docLable">
        <label htmlFor="edu">Download or View CV and Cover Letter</label>
      </div>
      <div className="downloadDocs" onClick={docflip}>
        <a.div
          className="c front"
          style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}
        >
          <AboutDoc flip={flip} />
        </a.div>
        <a.div
          className="c back"
          style={{
            opacity,
            transform: transform.interpolate((t) => `${t} rotateX(180deg)`),
          }}
        >
          <DownlDoc flip={flip} />
        </a.div>
      </div>
    </div>
  );
}

export default Documents;
