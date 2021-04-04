import React from "react";
import "./Home.css";
import Card from "./Card";
import "./Skills.css";
import SkillsButton from "./SkillsButton";
import ContactInfo from "./Contact";
import { FaAddressBook } from 'react-icons/fa';

function Home() {
  return (
    <>
      <div className="aboutMe">
        <div className="name">
        <p className="name">Niroshana Witharana</p>
        <div className="divider"></div>
        <p className="jobTitle">Full Stack Developer</p>
        </div>
        <div className="theo">
          <div className="picard">
          <Card />
          </div>
          <div className="contact">
            <div className="contactIcon">
              <label htmlFor="aboutme" style={{fontSize:'1.25rem', color: 'var(--clr-grey-3)' }}> I am a Full-stack Web Developer, who has successfully completed the Coding Boot Camp accredited and run by The University Of Birmingham. I have competently gained a highly refined industry relevant skill set to engineer a Full Stack Web Application with confidence. I'm a fast learner and very passionate about solving problems.</label>
          <br/><br/>
          <label htmlFor="icon" style={{fontSize:'1.5rem', color: 'var(--clr-grey-3)' }}>Contact info : <FaAddressBook /></label>
          </div>
            <ContactInfo />
          </div>
        </div>
        <div className="skillist">
        <SkillsButton />
        </div>
      </div>
    </>
  );
}
export default Home;
