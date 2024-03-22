import React from 'react';
import "./skills.css";
import UIDesign from "../../assets/ui-removebg-preview.png";
import WebDesign from "../../assets/web_design-removebg-preview.png";
import AppDesign from "../../assets/Appdesign-removebg-preview.png";


const Skills = () => {
  return (
    <section id="skills">
      <span className='skillTitle'>What I do</span>
      <span className="skillDesc">I am a skilled and passionate web designer with experience in creating visually appealing and user-friendly websites. I have a strong understanding of design, I am proficient in HTML,CSS and javascript as well as design Software </span>
     <div className="skillBars">
      <div className="skillBar">
        <img src={UIDesign} alt='UIDesign' className="skillBarImg" />
        <div className="skillBarText">
          <h2>UI/UX Design</h2>
          <p>I'm a competent and passionate UI/UX Designer</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
        <div className="skillBarText">
          <h2>Website Design</h2>
          <p>I'm a creativity Web Designer</p>
        </div>
      </div>
      <div className="skillBar">
        <img src={AppDesign} alt="App design" className="skillBarImg" />
        <div className="skillBarText">
          <h2>App Design</h2>
          <p>I create programs for smartphones, tablets and computers.</p>
        </div>
      </div>
     </div>
    </section>
  )
}

export default Skills